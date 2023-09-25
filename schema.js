// schema.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    employees: [Employee]!
    employee(id: ID!): Employee
  }

  type Mutation {
    createEmployee(input: EmployeeInput!): Employee
    createEmployees(input: [EmployeeInput!]!): [Employee]
    updateEmployee(id: ID!, input: EmployeeInput!): Employee
    deleteEmployee(id: ID!): Employee
  }

  input EmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
  }
`;

module.exports = typeDefs;
