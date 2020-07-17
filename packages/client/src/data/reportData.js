export const mockReportData = {
  critical: [
    {
      title: 'color contrast',
      summary:
        'Ensure the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.',
      failedStandard: 'WCAG 2 AA',
      resource: '/',
      fixes: [
        {
          summary:
            '15 element have insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.',
          tips: [
            'foreground color: #0ab587',
            'background color: #f2f2f2',
            'font size: 45pt',
            'font weight: bold'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                'a[href$="from-office-to-space"] > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.css-1e95rm6.eh1sm5o1:nth-child(3) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-2vm36c.ezjn55m5',
                '.css-1o9uz9i.ezjn55m7[href$="mobility"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            },
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            },
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as'
              ]
            }
          ]
        },
        {
          summary:
            '9 elements have insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.',
          tips: [
            'foreground color: #0ab587',
            'background color: #f2f2f2',
            'font size: 45pt',
            'font weight: bold'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                'a[href$="from-office-to-space"] > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.css-1e95rm6.eh1sm5o1:nth-child(3) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            },
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            }
          ]
        }
      ]
    },
    {
      title: '<img> element',
      summary:
        'Ensure <img> elements have alternate text or a role of none or presentation.',
      failedStandard: 'WCAG 2 AA',
      resource: '/',
      fixes: [
        {
          summary: '8 <img> elements have no alternate text.',
          tips: [
            'Element does not have an alt attribute',
            'aria-label attribute does not exist or is empty',
            'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty',
            'Element has no title attribute or the title attribute is empty',
            'Element\'s default semantics were not overridden with role="presentation"',
            'Element\'s default semantics were not overridden with role="none"'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                'a[href$="from-office-to-space"] > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.css-1e95rm6.eh1sm5o1:nth-child(3) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-2vm36c.ezjn55m5',
                '.css-1o9uz9i.ezjn55m7[href$="mobility"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            }
          ]
        },
        {
          summary: '3 <img> elements have no alternate text.',
          tips: [
            'Element does not have an alt attribute',
            'aria-label attribute does not exist or is empty'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.egb6tqc3',
                '.css-1bk73as',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            }
          ]
        },
        {
          summary: '1 <img> element has no alternate text.',
          tips: ['Element does not have an alt attribute'],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: ['.egb6tqc3']
            }
          ]
        }
      ]
    }
  ],
  serious: [
    {
      title: 'svg image alt',
      summary: 'Ensure every image has an alt text.',
      failedStandard: 'WCAG 2 AA',
      resource: '/',
      fixes: [
        {
          summary: '5 svg elements have no alternate text.',
          tips: [
            'element has no child that is a title',
            'aria-label attribute does not exist or is empty',
            'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1e95rm6.eh1sm5o1:nth-child(1) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                'a[href$="from-office-to-space"] > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.css-1e95rm6.eh1sm5o1:nth-child(3) > a > .css-1favn2n.eh1sm5o2 > .css-t5irqm.eh1sm5o3',
                '.egb6tqc3',
                '.css-1bk73as'
              ]
            }
          ]
        }
      ]
    }
  ],
  moderate: [
    {
      title: 'landmarks',
      summary: 'Ensure all page content is contained by landmarks.',
      failedStandard: 'WCAG 2 AA',
      resource: '/',
      fixes: [
        {
          summary: '3 elements are not contained by landmarks.',
          tips: ['Some page content is not contained by landmarks'],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-2vm36c.ezjn55m5',
                '.css-1o9uz9i.ezjn55m7[href$="mobility"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij'
              ]
            }
          ]
        }
      ]
    }
  ],
  minor: [
    {
      title: 'display orientation',
      summary:
        'Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations.',
      failedStandard: 'WCAG 2 AA',
      resource: '/',
      fixes: [
        {
          summary: '2 elements are not operable in all display orientations.',
          tips: [
            'Some page content are not operable in all display orientations'
          ],
          affectedElements: [
            {
              page: 'https://futurice.com/careers/lead-developer-helsinki',
              selectors: [
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-f7dlij',
                '.css-1o9uz9i.ezjn55m7[href$="bets-for-the-future"] > .css-1s82cjv.ezjn55m4 > .css-2vm36c.ezjn55m5'
              ]
            }
          ]
        }
      ]
    }
  ]
};
