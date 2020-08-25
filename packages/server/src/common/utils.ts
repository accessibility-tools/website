export const isUrl = (str= ''): boolean => {
  const pattern = new RegExp('^(https?:\\/\\/)'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}


/**
 * @function getViolationsInfo
 * @description Returns all violations and all page urls that had problems during the test run
 * @param {AxeResults[]} data
 * @returns {Object} Violations and page urls where this violations were found
 */
export const getViolationsInfo = (data) =>
  data.reduce((acc, { violations, url }) => {
    const violationsWithUrl = violations && violations.length > 0 && violations.map((violation) => ({ ...violation, pageUrl: url }));

    return violationsWithUrl && {
      violations: [...acc.violations, ...violationsWithUrl],
      pageUrls: [...acc.pageUrls, url]
    }
  }, { violations: [], pageUrls: [] });


export const filterNodesData = (nodes) =>
  nodes.map(({ failureSummary, html, target }) => ({
    failureSummary,
    html,
    target
  }));

/**
 * @function mapViolationsByImpact
 * @param {Array<Object>} violations
 * @returns {Object} the violations grouped by impact level and then by issue id
 */
export const mapViolationsByImpact = (violations) =>
  violations.reduce(
    (acc, { nodes, id, impact, help, description, helpUrl, pageUrl }) => {
      const filteredNodes = filterNodesData(nodes);

      if (!acc[impact]) {
        acc[impact] = {};
      }

      if (acc[impact][id]) {
        acc[impact][id] = {
          ...acc[impact][id],
          nodesPerPage: [
            ...acc[impact][id].nodesPerPage,
            {
              pageUrl,
              nodes: [...(acc[impact][id].nodesPerPage.nodes || []), ...filteredNodes]
            }
          ]
        }
      } else {
        acc[impact][id] = {
          id,
          helpUrl,
          description,
          nodesPerPage: [
            {
              pageUrl,
              nodes: filteredNodes
            }
          ],
          title: help
        }
      }

      return acc;
    },
    {}
  );

export const countViolationsPerImpact = (violationsByCategory) => {
  let impactCategoryCounts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (let [impact, violations] of Object.entries(violationsByCategory)) {
    for (let issue of Object.values(violations)) {
      const issueNodesCount = (issue.nodesPerPage || []).reduce((acc, { nodes }) => acc + nodes.length, 0)
      impactCategoryCounts[impact] += issueNodesCount;
    }
  }

  return impactCategoryCounts;
}
