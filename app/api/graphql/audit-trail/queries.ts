import { gql } from "@apollo/client";

export const GET_AUDIT_TRAIL = gql`
  query GetAuditTrail($entryId: uuid!, $noteId: uuid!) {
    audit_trail(
      where: {
        logbookentryid: { _eq: $entryId }
        _and: { noteid: { _eq: $noteId } }
      }
    ) {
      changeid
      logbookentryid
      noteid
      changetype
      changedetails
      timestamp
      user {
        name
      }
    }
  }
`;
