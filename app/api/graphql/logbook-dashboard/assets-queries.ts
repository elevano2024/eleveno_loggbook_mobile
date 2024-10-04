import { gql } from "@apollo/client";

export const GET_ASEETS = gql`
  query getAssets {
    assets(where: { isAssetActive: { _eq: true } }) {
      name
      type
      location_id
      id
    }
  }
`;
