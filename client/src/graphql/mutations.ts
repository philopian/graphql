import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $id: ID! 
    $name: String!
    $email: String!
    $age: Int!
    $gender: String!
    $married: Boolean!
  ) {
    createUser(
      id: $id
      name: $name
      email: $email
      age: $age
      gender: $gender
      married: $married
    ) {
      id
      name
    }
  }
`;