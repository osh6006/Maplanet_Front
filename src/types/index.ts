export type { IHelperBoardPost, IHelperBoard, IHelperBoardDetail } from './interfaces/helper';
export type { IHunterBoard, IHunterBoardPost, IHunterBoardDetail } from './interfaces/hunter';
export type {
  IWoodCutterBoard,
  IWoodCutterBoardDetail,
  IWoodCutterBoardPost
} from './interfaces/wood-cutter';
export type { IPartyBoard, IPartyBoardDeatil, IPartyBoardPost } from './interfaces/party';
export type { INoticePost, INotice } from './interfaces/notice';

export type Job = '전사' | '궁수' | '도적' | '마법사';
export type BoardType = 'board1' | 'board2';
export interface IBadge {
  name: string;
  iconSrc: string;
  alt: string;
  width: number;
  height: number;
}
