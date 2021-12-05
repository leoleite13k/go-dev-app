export interface IUserTracks {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  numberOfLessons: string;
  numberOfLessonsCompleted: string;
  percentCompleted: string;
}

export interface BarContextData {
  userTracks: IUserTracks[];
  getUserTracks(): Promise<void>;
}
