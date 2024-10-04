import { gql } from "@apollo/client";

export const GET_USER_ALERTS = gql`
  query GetUserAlerts($userId: uuid) {
    alerts(
      order_by: { isread: asc, created_at: desc }
      where: { userid: { _eq: $userId } }
    ) {
      comment_id
      created_at
      created_by
      id
      isread
      logbook_entry_id
      noteid
      type
      is_cleared
      user {
        name
      }
    }
  }
`;

export const GET_ALL_ALERTS = gql`
  query alertsTable {
    alerts {
      id
      created_at
      created_by
      isread
      type
      note {
        notetext
        shift {
          shift_name
        }
      }
      comment {
        commentid
        commenttext
      }
    }
  }
`;
