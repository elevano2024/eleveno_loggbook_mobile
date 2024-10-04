import { gql } from "@apollo/client";

export const UPDATE_REPORT_SETTINGS = gql`
  mutation UpdateReportSettings(
    $id: uuid!
    $showCreatedBy: Boolean
    $showPassdownBy: Boolean
    $assetStatus: [String!]
    $sortBy: String
    $reportEmailList: [String]
  ) {
    update_report_settings_by_pk(
      pk_columns: { id: $id }
      _set: {
        show_created_by: $showCreatedBy
        show_passdown_by: $showPassdownBy
        asset_status: $assetStatus
        sort_by: $sortBy
        report_email_list: $reportEmailList
      }
    ) {
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

export const UPDATE_REPORT_SUMMARY = gql`
  mutation UpdateReportSummary(
    $reportId: uuid!
    $shiftId: uuid!
    $shiftSummary: String!
  ) {
    update_report_shifts(
      where: {
        report_id: { _eq: $reportId }
        _and: { shift_id: { _eq: $shiftId } }
      }
      _set: { shift_summary: $shiftSummary }
    ) {
      returning {
        shift_report_id
        shift_summary
      }
    }
  }
`;
