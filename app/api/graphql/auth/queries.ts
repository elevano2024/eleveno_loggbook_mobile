import { gql } from "@apollo/client";

export const SIGN_IN_USER = gql`
  query GetUserData($name: String!, $password: String!) {
    users(
      where: { password: { _eq: $password }, _and: { name: { _eq: $name } } }
    ) {
      id
      name
      verified
      role
      location_ids
    }
  }
`;

export const CHECK_USER_EXISTS = gql`
  query CheckUserExists($name: String!) {
    users(where: { name: { _eq: $name } }) {
      name
    }
  }
`;

export const CHECK_RESET_PASSWORD_ACTIVATED = gql`
  query CheckUserExists($id: uuid!) {
    users(where: { id: { _eq: $id } }) {
      name
      isResetRequested
    }
  }
`;
