export interface IJamjjulPost {
  meso: string;
  title: string;
  maple_nickname: string;
  hunting_ground: string;
  level: number;
  job: string;
  progress_time: string;
  position: boolean;
}

export interface IHelperBoard {
  board1_id: number;
  user_id: number;
  discord_id: string;
  meso: number;
  title: string;
  hunting_ground: string;
  level: number;
  sub_job: string;
  progress_kind: string;
  progress_time: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  manner_count: number;
  report_count: number;
  created_at: string;
  updated_at: string;
}
