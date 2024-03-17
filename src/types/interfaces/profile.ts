export interface IBoard1ProfileResponse {
  board1Profile: IBoard1Data[];
  userProfile: IUserProfileData;
  totalCount: number;
}

export interface IBoard2ProfileResponse {
  board2Profile: IBoard2Data[];
  userProfile: IUserProfileData;
  totalCount: number;
}

export interface IBoard3ProfileResponse {
  board3Profile: IBoard3Data[];
  userProfile: IUserProfileData;
  totalCount: number;
}

export interface IBoard4ProfileResponse {
  board4Profile: IBoard4Data[];
  userProfile: IUserProfileData;
  totalCount: number;
}

export interface IUserProfileData {
  user_id: number;
  discord_id: string;
  discord_username: string;
  discord_global_name: string;
  discord_image: string;
  report_count: number;
  progress_count: number;
  manner_count: number;
  created_at: string;
  updated_at: string;
}


export interface IBoard1Data {
  board1_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  title: string;
  sub_job: string;
  progress_time: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
}

export interface IBoard2Data {
  board2_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  report_kind: string;
  title: string;
  place_theif_nickname: string;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
}

export interface IBoard3Data {
  board3_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  title: string;
  hunting_ground: string;
  sub_job: string;
  level: number;
  progress_time: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
}

export interface IBoard4Data {
  board4_id: number;
  user_id: number;
  discord_id: string;
  title: string;
  hunting_ground: string;
  recruit_people_count: number;
  progress_time: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
}