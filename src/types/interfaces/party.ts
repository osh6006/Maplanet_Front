export interface IPartyBoardPost {
  title: string;
  maple_nickname: string;
  hunting_ground: string;
  progress_time: number;
  parking: boolean;
  recruit_people_count: number;
  first_floor: string | null;
  second_floor: string | null;
  third_floor: string | null;
  fourth_floor: string | null;
  fifth_floor: string | null;
  sixth_floor: string | null;
}

export interface IPartyBoard {
  board4_id: number;
  user_id: number;
  discord_id: string;
  title: string;
  hunting_ground: string;
  progress_time: number;
  recruit_people_count: number;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  manner_count: number;
  report_count: number;
  created_at: string;
  updated_at: string;
}

export interface IPartyBoardDeatil {
  board4_id: number;
  user_id: number;
  discord_id: string;
  title: string;
  maple_nickname: string;
  hunting_ground: string;
  progress_time: number;
  parking: boolean;
  recruit_people_count: number;
  first_floor: string;
  second_floor: string;
  third_floor: string;
  fourth_floor: string;
  fifth_floor: string;
  sixth_floor: string;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  manner_count: number;
  report_count: number;
  created_at: string;
  update_at: string;
}
