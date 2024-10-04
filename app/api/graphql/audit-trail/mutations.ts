import { gql } from "@apollo/client";

export const INSERT_AUDIT_TRAIL = gql`
  mutation InsertAuditTrail(
    $entryId: uuid
    $noteId: uuid
    $changeType: String
    $createdBy: uuid
    $createdAt: timestamptz
    $changeDetails: String
  ) {
    insert_audit_trail_one(
      object: {
        logbookentryid: $entryId
        noteid: $noteId
        changedby: $createdBy
        changetype: $changeType
        changedetails: $changeDetails
        timestamp: $createdAt
      }
    ) {
      changeid
    }
  }
`;
