export type TImpact = 'critical' | 'minor' | 'moderate' | 'serious'

export type TIssuesPerImpact = {
  [key in TImpact]: number;
};

export type TCategories = {
  [key: string]: any
}

export interface IFixElement {
  fixData?: any;
}

export interface IDetailsCard {
  issueData?: any;
}

export interface INoteContainer {
  isBackground?: boolean;
  isPadding?: boolean;
  isMargin?: boolean;
}

export interface IDetailsCategory {
  category?: string;
  issues?: any[];
}

export interface IOverviewCard {
  title?: string;
  subtext?: string;
  isIssue?: boolean;
  reportData?: any;
  issuesPerImpact: TIssuesPerImpact
}

export interface IReportIntro {
  isLoading?: boolean;
}
