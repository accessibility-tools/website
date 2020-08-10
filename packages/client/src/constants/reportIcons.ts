import { color } from '../shared/style';

interface IReportIcon {
  [key: string]: {
    name: string,
    color: string
  }
}

export const reportIcons: IReportIcon = {
  critical: {
    name: 'circle',
    color: color.error
  },
  serious: {
    name: 'issue',
    color: color.error
  },
  moderate: {
    name: 'issue',
    color: color.darkPurple
  },
  minor: {
    name: 'issue',
    color: color.primary
  }
};
