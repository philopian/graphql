import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    gender: String!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  # Mutations
  type Mutation {
    createUser( 
      id: ID!
      name: String!
      email: String!
      age: Int!
      gender: String!
      married: Boolean!
    ): User!
  }
`;