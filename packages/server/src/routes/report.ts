import { runCore as crawler } from 'accessible-pipeline';
import { Router as ExpressRouter } from 'express';
import { URL } from 'url';

import { countViolationsPerImpact, getViolationsInfo, isUrl, mapViolationsByImpact } from '../common/utils';


const router = ExpressRouter();
const SORT_ORDER = {
  critical: 3,
  serious: 2,
  moderate: 1,
  minor: 0
}

router.get('/api/report', async (req, res) => {
  const url: string | null = decodeURIComponent(req.query.url) || null;

  if (!url || !(url && isUrl(url))) {
    res.status(400).send({
      message: 'URL is invalid. Please provide a correct one'
    });
  }

  try {
    const pageLimit: number = parseInt(req.query.pageLimit) || 0;
    let options: any = {};

    if (pageLimit) {
      options = {
        ...options,
        pageLimit
      };
    }

    const report = await getReport({ url, options });

    res.status(200).send({
      report
    });
  } catch (err) {
    res.status(500).send({
      message: 'Something went wrong. Please reload the page and try again.'
    });
  }
});

const getReport = async ({ url, options }): Promise<any> => {
  const { results } = await crawler(new URL(url), options);
  const { pageUrls, violations } = getViolationsInfo(results);
  const violationsByImpact = Object.fromEntries(
    Object.entries(mapViolationsByImpact(violations))
      .sort(([keyA], [keyB]) =>
        SORT_ORDER[keyB] - SORT_ORDER[keyA]
      )
  );
  const violationsPerImpact = countViolationsPerImpact(violationsByImpact);

  return {
    pageUrls,
    violationsByImpact,
    violationsPerImpact
  }
}

export default router;
