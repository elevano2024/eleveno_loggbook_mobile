import { gql } from "@apollo/client";

export const UPDATE_USER_VERIFIED_STATUS = gql`
  mutation UpdateUserVerifiedStatus($id: uuid!, $verified: Boolean!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { verified: $verified }) {
      id
      verified
    }
  }
`;
