export interface IWoodBoard {
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
  created_at: string; // Assuming created_at is received as a string
  updated_at: string; // Assuming updated_at is received as a string
  manner_count: number;
  report_count: number;
}
