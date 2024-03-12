export interface IWoodCutterBoardPost {
  title: string;
  meso: number | string;
  main_job: string;
  sub_job: string;
  progress_time: string;
  hunting_ground: string;
  level: number;
  maple_nickname: string;
}

export interface IWoodCutterBoard {
  board3_id: number;
  user_id: number;
  discord_id: string;
  title: string;
  meso: number | string;
  sub_job: string;
  progress_time: string;
  hunting_ground: string;
  level: number;
  discord_global_name: string;
  discord_image: string;
  complete: boolean;
  view_count: number;
  manner_count: number;
  report_count: number;
  created_at: string;
  updated_at: string;
}

export interface IWoodCutterBoardDetail {
  board3_id: number;
  user_id: number;
  discord_id: string;
  title: string;
  meso: number | string;
  sub_job: string;
  progress_time: string;
  hunting_ground: string;
  level: number;
  maple_nickname: string;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  manner_count: number;
  report_count: number;
  created_at: string;
  update_at: string;
}
