import { gql } from "@apollo/client";

export const ARCHIVE_LOGBOOK_ENTRY_MUTATION = gql`
  mutation ArchiveLogbookEntry($entryId: uuid!) {
    update_logbook_entries(
      where: { entryid: { _eq: $entryId } }
      _set: { archive: true }
    ) {
      returning {
        archive
        userid
        entryid
      }
    }
  }
`;

export const BULK_ARCHIVE_LOGBOOK_ENTRY_MUTATION = gql`
  mutation ArchiveLogbookEntry($entryId: [uuid]!) {
    update_logbook_entries(
      where: { entryid: { _in: $entryId } }
      _set: { archive: true }
    ) {
      returning {
        archive
        userid
        entryid
      }
    }
  }
`;
