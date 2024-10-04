import { gql } from "@apollo/client";

export const CREATE_LOCATION_MUTATION = gql`
  mutation CreateLocation($name: String!) {
    insert_locations(objects: { name: $name }) {
      returning {
        id
      }
    }
  }
`;

export const CREATE_ASSET_MUTATION = gql`
  mutation CreateAsset(
    $name: String!
    $locationId: uuid!
    $type: String!
    $asset_grouping: String!
  ) {
    insert_assets(
      objects: {
        name: $name
        location_id: $locationId
        type: $type
        asset_grouping: $asset_grouping
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_ASSET_MUTATION = gql`
  mutation UpdateAsset(
    $id: uuid!
    $name: String!
    $locationId: uuid!
    $type: String!
    $asset_status: String!
    $asset_grouping: String!
  ) {
    update_assets(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        location_id: $locationId
        type: $type
        asset_status: $asset_status
        asset_grouping: $asset_grouping
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $nodeId: uuid!
    $userId: uuid!
    $commentText: String!
    $taggedUsers: [String!]
  ) {
    insert_comments(
      objects: {
        noteid: $nodeId
        userid: $userId
        commenttext: $commentText
        tagged_users: $taggedUsers
      }
    ) {
      returning {
        commentid
        commenttext
        noteid
        userid
        createdat
      }
    }
  }
`;

export const DELETE_ASSET_MUTATION = gql`
  mutation UpdateAsset($id: uuid!) {
    update_assets(where: { id: { _eq: $id } }, _set: { isAssetActive: false }) {
      returning {
        id
      }
    }
  }
`;
