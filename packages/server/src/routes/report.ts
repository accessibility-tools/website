import { runCore as crawler } from 'accessible-pipeline';
import { Router as ExpressRouter } from 'express';
import { URL } from 'url';

import { getViolationsInfo, isUrl, mapViolationsToCategory } from '../common/utils';


const router = ExpressRouter();

router.get('/report', async (req, res) => {
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
  const violationsByCategory = mapViolationsToCategory(violations);
  const pageCount = pageUrls.length;
  const nodes = violations.map(({ nodes }) => nodes).flat();
  const violationsCount = nodes.length;
  const averageErrors = Math.round((violationsCount / pageCount) * 100) / 100;

  return {
    pageUrls,
    averageErrors,
    violationsByCategory
  }
}

export default router;
