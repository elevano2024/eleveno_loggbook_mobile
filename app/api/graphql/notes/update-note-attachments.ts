import { gql } from '@apollo/client';

export const UPDATE_NOTES_ATTACHMENTS_MUTATION = gql`
  mutation UpdateAttachments($attachment_urls: [String]!, $noteId: uuid!) {
    update_notes(
      where: { noteid: { _eq: $noteId } },
      _set: { attachment_urls: $attachment_urls }
    ) {
      returning {
        noteid
        attachment_urls
      }
    }
  }
`;
