import { gql } from "@apollo/client";

export const LOGBOOK_ENTRIES_BY_USER_AND_LOCATION = gql`
  query LogbookEntriesByUserAndLocation(
    $userID: uuid!
    $locationID: uuid!
    $isArchive: Boolean
  ) {
    logbook_entries(
      where: {
        userid: { _eq: $userID }
        location_id: { _eq: $locationID }
        archive: { _eq: $isArchive }
      }
      order_by: { timeframe: desc }
    ) {
      type
      entryid
      timeframe
      asset {
        name
      }
      notes {
        notetext
        notetext_raw
        noteid
        attachment_urls
        tagged_users
        comments {
          commentid
          commenttext
          noteid
          userid
          createdat
        }
      }
      createdByUsername {
        name
      }
      current_asset_status
    }
  }
`;

export const LOGBOOK_ENTRIES_BY_LOCATION = gql`
  query LogbookEntriesByLocation($locationID: uuid!, $isArchive: Boolean) {
    logbook_entries(
      where: { location_id: { _eq: $locationID }, archive: { _eq: $isArchive } }
      order_by: { timeframe: desc }
    ) {
      type
      entryid
      timeframe
      asset {
        name
      }
      notes {
        notetext
        notetext_raw
        noteid
        attachment_urls
        tagged_users
        comments {
          commentid
          commenttext
          noteid
          userid
          createdat
        }
      }
      createdByUsername {
        name
      }
      current_asset_status
    }
  }
`;

export const LOGBOOK_ENTRIES_BY_NOTE_ID = gql`
  query LogbookEntriesByNoteId($entryId: uuid!, $noteId: uuid!) {
    logbook_entries(
      where: { entryid: { _eq: $entryId }, notes: { noteid: { _eq: $noteId } } }
    ) {
      assetid
      logbook_id
      type
      notes {
        entryid
        notetext
        notetext_raw
        attachment_urls
        tagged_users
      }
      current_asset_status
    }
  }
`;

export const LOGBOOK_ENTRIES_TOTAL_BY_LOCATION = gql`
  query LogbookEntriesCountByLocation($locationID: uuid!, $isArchive: Boolean) {
    logbook_entries_aggregate(
      where: { location_id: { _eq: $locationID }, archive: { _eq: $isArchive } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const LOGBOOK_ENTRIES_TOTAL_BY_USER = gql`
  query LogbookEntriesCountByUser(
    $locationID: uuid!
    $userID: uuid!
    $isArchive: Boolean
  ) {
    logbook_entries_aggregate(
      where: {
        location_id: { _eq: $locationID }
        userid: { _eq: $userID }
        archive: { _eq: $isArchive }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const LOGBOOK_ENTRY_BY_ID = gql`
  query LogbookEntryById($entryId: uuid!) {
    logbook_entries_by_pk(entryid: $entryId) {
      type
      entryid
      timeframe
      asset {
        name
      }
      notes {
        notetext
        notetext_raw
        noteid
        attachment_urls
        tagged_users
        comments {
          commentid
          commenttext
          noteid
          userid
          createdat
        }
      }
      createdByUsername {
        name
      }
    }
  }
`;
