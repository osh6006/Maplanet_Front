export interface INoticePost {
  title: string;
  category: string;
  content: string;
}

export interface INotice {
  notice_id: number;
  administrator_id: number;
  title: string;
  category: string;
  writer: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}
