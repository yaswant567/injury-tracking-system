import { GraphQLDateTime } from 'graphql-scalars';


export const typeDefs =`#graphql

  scalar DateTime

  type User{
    id: ID!
    username: String!
    password: String
    reports: [Report!]!
  }

  type Report{
    id: ID!
    reporterName: String!
    injuryDateTime: String!
    reportDateTime: String!
    userId: ID!
    user: User!
    injuries: [Injury!]!
  }

  type Injury{
    id: ID!
    bodyArea: String!
    description: String
    reportId: ID!
    report: Report!
  }

  type Query{
    user(id: ID!): User
    report(id: ID!): Report
    injury(id: ID!): Injury
    allUsers: [User!]!
    allReports: [Report!]!
    allInjuries: [Injury!]!
  }

  type Mutation{
    createUser(username: String!, password: String!): User
    createReport(reporterName: String!, injuryDateTime: String!, userId: ID!): ID
    createInjury(bodyArea: String!, description: String, reportId: ID!): Injury
  }
   
`