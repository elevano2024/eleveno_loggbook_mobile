import { type LocationsType } from "@/app/(main)/user-management/user-management-types";

export interface Location {
  id: string;
  name: string;
}
export interface Role {
  id: string;
  rolename: string;
}

export interface User {
  id: string;
  name: string;
  created_at: string;
  last_seen: string;
  password: string;
  location_ids: string[];
  role: string;
  verified: boolean;
  locations?: LocationsType[];
  __typename?: string;
}

export interface AssetsId {
  id: string;
  label: string;
}

export interface CreatedByUsername {
  id: string;
  label: string;
}

export interface Comment {
  commentid: string;
  commenttext: string;
  noteid: string;
  userid: string;
  createdat: Date;
}

export interface Note {
  noteid: string;
  notetext: string;
  notetext_raw?: string;
  attachment_urls: Array<string>;
  comments: Array<Comment>;
  tagged_users?: Array<string>;
}

export interface Logbook_entries {
  asset: {
    name: string;
  };
  createdByUsername: {
    name: string;
  };
  type: string;
  entryid: string;
  notes: Array<Note>;
  timeframe: Date;
}

export interface Asset {
  asset_status: string;
  id: string;
  name: string;
  location_id: string;
  type: string;
  asset_grouping?: string;
}
