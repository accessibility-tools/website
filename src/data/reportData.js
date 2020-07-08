export const mockReportData = {
  critical: [
    {
      title: "Color contrast",
      summary:
        "Ensure the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds.",
      resource: "/",
      failedStandards: [
        { name: "WCAG 2 AA", link: "/" },
        { name: "WCAG 1.4.3", link: "/" },
        { name: "CAT.COLOR", link: "/" },
      ],
      fixes: [
        {
          summary:
            "1 element has insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.",
          details: [
            "foreground color: #0ab587",
            "background color: #f2f2f2",
            "font size: 45pt",
            "font weight: bold",
          ],
          link: "/",
        },
        {
          summary:
            "1 element has insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.",
          details: [
            "foreground color: #0ab587",
            "background color: #f2f2f2",
            "font size: 45pt",
            "font weight: bold",
          ],
          link: "/",
        },
        {
          summary:
            "1 element has insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.",
          details: [
            "foreground color: #0ab587",
            "background color: #f2f2f2",
            "font size: 45pt",
            "font weight: bold",
          ],
          link: "/",
        },
      ],
    },
    {
      title: "<img> element",
      summary:
        "Ensure <img> elements have alternate text or a role of none or presentation.",
      resource: "/",
      failedStandards: [
        { name: "WCAG 2 A", link: "/" },
        { name: "WCAG 1.1.1", link: "/" },
      ],
      fixes: [
        {
          summary:
            "1 element has insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.",
          details: [
            "Element does not have an alt attribute",
            "aria-label attribute does not exist or is empty",
            "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
            "Element has no title attribute or the title attribute is empty",
            "Element's default semantics were not overridden with role='presentation'",
            "Element's default semantics were not overridden with role='none'",
          ],
          link: "/",
        },
        {
          summary:
            "1 element has insufficient color contrast of 2.35:1. The expected contrast ratio is 3:1.",
          details: [
            "Element does not have an alt attribute",
            "aria-label attribute does not exist or is empty",
            "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
            "Element has no title attribute or the title attribute is empty",
            "Element's default semantics were not overridden with role='presentation'",
            "Element's default semantics were not overridden with role='none'",
          ],
          link: "/",
        },
      ],
    },
  ],
  serious: [
    {
      title: "Svg image alt",
      summary: "Ensure every image has an alt text.",
      resource: "/",
      failedStandards: [
        { name: "WCAG 2 A", link: "/" },
        { name: "WCAG 1.1.1", link: "/" },
      ],
      fixes: [
        {
          summary:
            "1 element has its view restricted to portrait orientation only.",
          details: [
            "element has no child that is a title",
            "aria-label attribute does not exist or is empty",
            "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
          ],
          link: "/",
        },
        {
          summary:
            "1 element has its view restricted to portrait orientation only.",
          details: [
            "element has no child that is a title",
            "aria-label attribute does not exist or is empty",
            "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
          ],
          link: "/",
        },
      ],
    },
  ],
  moderate: [
    {
      title: "Lankmarks",
      summary: "Ensure all page content is contained by landmarks.",
      resource: "/",
      failedStandards: [
        { name: "WCAG 2 AA", link: "/" },
        { name: "CAT.KEYBOARD", link: "/" },
      ],
      fixes: [
        {
          summary: "1 element is not contained by landmarks.",
          details: ["Some page content is not contained by landmarks"],
          link: "/",
        },
      ],
    },
  ],
  minor: [],
};
