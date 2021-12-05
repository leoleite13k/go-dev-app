import { ITrack } from '../Home/interface';

export interface IParams {
  id?: string;
}

export interface ILesson {
  id: number;
  trackId: number;
  title: string;
  description: string;
  content: string;
  points: number;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITrackLessons extends ITrack {
  lessons: ILesson[];
}
