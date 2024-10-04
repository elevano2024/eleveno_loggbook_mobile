import { gql } from "@apollo/client";

export const CREATE_ALERT = gql`
  mutation CreateAlert($objects: [alerts_insert_input!]!) {
    insert_alerts(objects: $objects) {
      returning {
        id
        userid
        created_by
        created_at
        isread
        noteid
        logbook_entry_id
        comment_id
        type
        is_cleared
      }
    }
  }
`;

export const UPDATE_ALERT_READ_STATUS = gql`
  mutation UpdateAlertReadStatus($id: uuid!, $isread: Boolean!) {
    update_alerts_by_pk(pk_columns: { id: $id }, _set: { isread: $isread }) {
      id
      userid
      created_by
      created_at
      isread
      noteid
      logbook_entry_id
      comment_id
      type
    }
  }
`;

export const UPDATE_ALERT_CLEARED_STATUS = gql`
  mutation UpdateAlertReadStatus($id: uuid!, $isCleared: Boolean!) {
    update_alerts_by_pk(
      pk_columns: { id: $id }
      _set: { is_cleared: $isCleared }
    ) {
      id
      userid
      created_by
      created_at
      isread
      is_cleared
      noteid
      logbook_entry_id
      comment_id
      type
    }
  }
`;
