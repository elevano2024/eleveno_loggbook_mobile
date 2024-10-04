import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $name: String
    $password: String
    $location_ids: [uuid]
    $role: String
    $verified: Boolean = false
    $created_at: timestamptz
    $last_seen: timestamptz
  ) {
    insert_users(
      objects: {
        name: $name
        password: $password
        location_ids: $location_ids
        created_at: $created_at
        last_seen: $last_seen
        role: $role
        verified: $verified
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: uuid!, $role: String, $location_ids: [uuid]) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { role: $role, location_ids: $location_ids }
    ) {
      returning {
        id
      }
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword(
    $id: uuid!
    $oldPassword: String!
    $newPassword: String!
  ) {
    update_users(
      where: { id: { _eq: $id }, password: { _eq: $oldPassword } }
      _set: { password: $newPassword }
    ) {
      returning {
        id
      }
    }
  }
`;

export const RESET_USER_PASSWORD_FLAG_MUTATION = gql`
  mutation UpdateUser($id: uuid!) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { isResetRequested: true }
    ) {
      returning {
        id
      }
    }
  }
`;
export const RESET_USER_PASSWORD_MUTATION = gql`
  mutation UpdateUser($id: uuid!, $password: String!, $name: String!) {
    update_users(
      where: { id: { _eq: $id }, name: { _eq: $name } }
      _set: { password: $password, isResetRequested: false }
    ) {
      returning {
        id
      }
    }
  }
`;
