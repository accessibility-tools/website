import { stringify as qsStringify } from 'query-string';

import { IReport } from '../components/report/types';


export interface IReportResponse {
  report: IReport;
}

function fetchJSON<T>(url: string, init?: any | undefined): Promise<T> {
  return fetch(url, {
    ...init,
    body:
      init?.body && typeof init.body !== 'string'
        ? JSON.stringify(init.body)
        : init?.body,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...init?.headers
    }
  }).then((res) => {
    if (res.ok) {
      // NOTE: Some endpoints return empty result while still reporting
      // Content-Type: application/json, so just revert to null
      // value if the JSON parsing fails
      return res.json().catch(() => null);
    } else {
      return res.text().then(
        (message) => Promise.reject(Error(message)),
        () => Error(`${res.status} ${url}`)
      );
    }
  });
}

const e = encodeURIComponent;

export function createAPIClientService(baseUrl: string) {
  return {
    getReport: (url: string, pageLimit?: number) =>
      fetchJSON<IReportResponse>(
        `${baseUrl}/report?${qsStringify({
          url: e(url),
          pageLimit
        })}`
      )
  };
}


export type IAPIClientService = ReturnType<typeof createAPIClientService>;
