import { gql } from "@apollo/client";

export const GET_REPORT_SETTINGS = gql`
  query reportSettings {
    report_settings {
      show_created_by
      show_passdown_by
      created_at
      id
      asset_status
      sort_by
      report_email_list
    }
  }
`;

export const GET_REPORTS = gql`
  query reports {
    reports {
      created_at
      user_id
      report_id
      report_shifts {
        report_id
        shift_report_id
        shift_id
        shift_summary
        report_content_details(order_by: { noteInfo: { createdat: desc } }) {
          content_id
          noteInfo {
            notetext
            createdat
            note_asset_status
            shift {
              shift_name
            }
            logbook_entry {
              createdByUsername {
                name
              }
              location {
                id
                name
              }
              asset {
                asset_grouping
                asset_status
                name
                isAssetActive
              }
              archive
            }
          }
        }
      }
    }
  }
`;
