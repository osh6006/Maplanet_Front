export interface IHunterBoard {
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
  manner_count: number;
  report_count: number;
  created_at: string;
  updated_at: string;
}

export interface IHunterBoardPost {
  meso: number | null | string;
  report_kind: string;
  title: string;
  request_nickname: string;
  place_theif_nickname: string;
}

export interface IHunterBoardDetail {
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
