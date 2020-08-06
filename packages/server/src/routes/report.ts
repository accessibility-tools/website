import { runCore as crawler } from 'accessible-pipeline';
import { Router as ExpressRouter } from 'express';
import { URL } from 'url';

import { countIssuesPerImpact, getViolationsInfo, isUrl, mapViolationsByImpact } from '../common/utils';


const router = ExpressRouter();

router.get('/api/report', async (req, res) => {
  const url: string | null = decodeURIComponent(req.query.url) || null;

  if (!url || !(url && isUrl(url))) {
    res.status(400).send({
      message: 'URL is invalid. Please provide a correct one'
    });
  }

  try {
    const pageLimit: number = req.query.pageLimit || 0;
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
  } catch(err) {
    res.status(500).send({
      message: 'Something went wrong. Please reload the page and try again.'
    });
  }
});

const getReport = async ({ url, options }): Promise<any> => {
  const { results } = await crawler(new URL(url), options);
  const { pageUrls, violations } = getViolationsInfo(results);
  const violationsByImpact = mapViolationsByImpact(violations);
  const issuesPerImpact = countIssuesPerImpact(violationsByImpact);

  return {
    pageUrls,
    violationsByImpact,
    issuesPerImpact
  }
}

export default router;
