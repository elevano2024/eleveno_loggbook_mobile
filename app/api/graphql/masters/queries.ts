import { gql } from "@apollo/client";

export const ALL_LOCATIONS = gql`
  query AllLocations {
    locations {
      id
      name
    }
  }
`;

export const ALL_ROlES = gql`
  query AllRoles {
    roles {
      id
      rolename
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocation($id: uuid!) {
    locations_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const ALL_ASSETS_BY_LOCATION = gql`
  query AllAssetsByLocation($locationID: uuid!) {
    assets(
      where: { location_id: { _eq: $locationID }, isAssetActive: { _eq: true } }
    ) {
      id
      name
      location_id
      type
      asset_status
      asset_grouping
    }
  }
`;

export const CHECK_LOCATION_EXISTS = gql`
  query CheckLocationExists($name: String!) {
    locations(where: { name: { _eq: $name } }) {
      name
    }
  }
`;

export const GET_CREATED_BY_USERNAMES = gql`
  query GetCreatedByUserNames {
    logbook_entries(distinct_on: userid) {
      userid
      createdByUsername {
        name
      }
    }
  }
`;

export const GET_ASSET_STATUS = gql`
  query GetAssetstatus($AssetName: String!) {
    assets(where: { name: { _eq: $AssetName } }) {
      name
      asset_status
      isAssetActive
      type
    }
  }
`;

export const GET_SHIFTS = gql`
  query GetShifts {
    shifts {
      shift_id
      shift_name
      start_time
      end_time
      buffer_start
      buffer_end
    }
  }
`;
