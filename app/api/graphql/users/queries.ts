import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query AllUsers {
    users(where: { isActive: { _eq: true } }) {
      id
      name
      created_at
      last_seen
      role
      verified
      location_ids
    }
  }
`;

export const GET_USER_SHIFT_BY_ID = gql`
  query GetUserData($id: uuid!) {
    users(where: { id: { _eq: $id } }) {
      shift_ids
    }
  }
`;
