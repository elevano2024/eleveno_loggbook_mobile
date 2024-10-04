import { gql } from "@apollo/client";

export const USER_ALERTS_SUBSCRIPTION = gql`
  subscription SubscribeUserAlerts($userId: uuid) {
    alerts(
      order_by: { isread: asc, created_at: desc }
      where: { userid: { _eq: $userId }, is_cleared: { _eq: false } }
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
