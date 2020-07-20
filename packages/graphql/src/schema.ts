import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
     report(url: String!): [ReportItem]!
  }

  type ReportItem {
    title: String!
    description: String!
    help: String
    helpUrl: String
    impactType: String!
    issues: [Issue]!
  }

  type Issue {
    summary: String!
    pageUrl: String!
    selector: String!
    domElement: String!
  }
`;
