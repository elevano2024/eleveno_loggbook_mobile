import { gql } from "@apollo/client";

export const UPDATE_NOTES_MUTATION = gql`
  mutation UpdateNotes(
    $noteText: String!
    $editedBy: uuid!
    $noteId: uuid!
    $noteTextRaw: String!
    $mentionedIdList: [String!]
  ) {
    update_notes(
      _set: {
        notetext: $noteText
        lasteditedby: $editedBy
        notetext_raw: $noteTextRaw
        tagged_users: $mentionedIdList
      }
      where: { noteid: { _eq: $noteId } }
    ) {
      returning {
        noteid
        notetext
        notetext_raw
      }
    }
  }
`;

export const UPDATE_NOTES_MENTIONS_MUTATION = gql`
  mutation UpdateNotes($noteId: uuid!, $mentionedIdList: [String!]) {
    update_notes(
      _set: { tagged_users: $mentionedIdList }
      where: { noteid: { _eq: $noteId } }
    ) {
      returning {
        noteid
      }
    }
  }
`;
