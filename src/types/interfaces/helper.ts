export interface IHelperBoardPost {
  meso: number | string | null;
  title: string;
  maple_nickname: string;
  hunting_ground: string;
  level: number;
  main_job: string;
  sub_job: string;
  progress_kind: string;
  progress_time: number | string | null;
  position: boolean;
}

export interface IHelperBoard {
  board1_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  title: string;
  sub_job: string;
  hunting_ground: string;
  progress_time: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  manner_count: number;
  report_count: number;
}

export interface IHelperBoardDetail {
  board1_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  title: string;
  maple_nickname: string;
  level: number;
  sub_job: string;
  progress_time: number;
  position: boolean;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
}
