import { gql } from "@apollo/client";

export const INSERT_LOGBOOK_ENTRY_MUTATION = gql`
  mutation InsertLogbookEntry(
    $locationId: uuid!
    $noteText: String!
    $noteTextRaw: String!
    $mentionedIdList: [String!]
    $assetId: uuid!
    $type: String!
    $userId: uuid!
    $currentStatus: String!
    $shiftId: uuid!
    $noteAssetStatus: String!
  ) {
    insert_logbook_entries_one(
      object: {
        location_id: $locationId
        notes: {
          data: {
            notetext: $noteText
            notetext_raw: $noteTextRaw
            tagged_users: $mentionedIdList
            shift_id: $shiftId
            note_asset_status: $noteAssetStatus
          }
        }
        assetid: $assetId
        type: $type
        userid: $userId
        current_asset_status: $currentStatus
      }
    ) {
      timeframe
      entryid
      notes {
        noteid
      }
      location_id
    }
  }
`;

export const UPDATE_LOGBOOK_ENTRY_BY_NOTE_ID = gql`
  mutation UpdateLogbookEntryByNoteId(
    $entryId: uuid!
    $noteId: uuid!
    $assetId: uuid!
    $type: String!
  ) {
    update_logbook_entries(
      where: { entryid: { _eq: $entryId }, notes: { noteid: { _eq: $noteId } } }
      _set: { assetid: $assetId, type: $type }
    ) {
      returning {
        assetid
        type
      }
    }
  }
`;
