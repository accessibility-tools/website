import { color } from '../shared/style';

export const ciTool = {
  id: 'ciTool',
  title: 'Check your website with your terminal before going live',
  img: '/illustrations/ci-tool.png',
  desc:
    'You can install our continuous integration tool (CI) on your terminal by running:',
  details: [
    'npm install @accessibility-tools/ci -g',
    'Then, you can perform a check by typing:',
    'aci https://example.com'
  ],
  ctaData: {
    text: 'Find out more on Github',
    url: 'https://github.com/accessibility-tools/ci',
    icon: 'extLink',
    isExternal: true
  },
  linkData: {}
};

export const webChecker = {
  id: 'webChecker',
  title: 'Accessibility checker for websites',
  img: '/illustrations/web-checker.png',
  desc:
    'Check any website for accessibility issues by simply entering a URL into our online tool.',
  details: [
    'Detect and fix accessibility issues like missing labels, lack of color contrast many more.',
    'Check huge websites with multiple pages in just one session.',
    'Learn if your website is complying to important standards in the industry and how to improve.'
  ],
  ctaData: {
    text: 'check out the tool',
    url: '/checker',
    icon: ''
  },
  linkData: {}
};

export const webCheckerAlt = {
  id: 'webCheckerAlt',
  title: 'About the tool',
  img: '/illustrations/web-checker.png',
  desc:
    'Check any website for accessibility issues by simply entering a URL into our online tool.',
  details: [
    'Detect and fix accessibility issues like missing labels, lack of color contrast many more.',
    'Check huge websites with multiple pages in just one session.',
    'Learn if your website is complying to important standards in the industry and how to improve.'
  ],
  ctaData: {
    text: 'More about this project',
    url: '/',
    icon: ''
  },
  linkData: {
    text: 'view on github',
    url: 'https://github.com/accessibility-tools/website',
    icon: 'extLink',
    isExternal: true
  }
};

interface IPageLimitOption {
  value: any;
  label: string;
  name: string;
  hintIcon?: string;
  hintText?: string;
  iconColor?: string;
  isChecked?: boolean;
}

export const PAGE_LIMIT_OPTIONS_INITIAL: IPageLimitOption[] = [
  {
    value: 1,
    name: 'Page limit',
    label: 'Check the given page only',
    isChecked: true
  },
  {
    value: 0,
    name: 'Page limit',
    label: 'Check all subpages',
    hintIcon: 'manicule',
    hintText: 'It can take a longer time to create reports for big websites.',
    iconColor: color.mediumGrey
  }
];
