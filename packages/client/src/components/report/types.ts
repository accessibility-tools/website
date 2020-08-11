export type TImpact = 'critical' | 'serious' | 'moderate' | 'minor';

export interface INode {
  failureSummary?: string;
  target: string[];
  html?: string;
}

export interface INodePerPage {
  pageUrl: string;
  nodes: INode[];
}

export interface IViolation {
  id: string;
  helpUrl?: string;
  description?: string;
  nodesPerPage: INodePerPage[];
  title?: string;
}

export interface IViolationsById {
  [key: string]: IViolation;
}

export type TViolationsPerImpact = {
  [key in TImpact]: number;
}

export type TViolationsByImpact = {
  [key in TImpact]: IViolationsById;
}

export interface IReport {
  pageUrls: string[];
  violationsPerImpact: TViolationsPerImpact;
  violationsByImpact: TViolationsByImpact;
}
