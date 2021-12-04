import { AvatarProps } from '@bigheads/core';

export interface IProfile {
  fullName: string;
  avatarOptions: AvatarProps;
  percentLevel: number | null;
  level: number | null;
  points: number;
}

type TProfileProps = {
  fullName: string;
  avatarOptions: AvatarProps;
};

export interface IProfileContextData {
  createProfile(profile: TProfileProps): Promise<void>;
  getProfile(): Promise<IProfile>;
  updateProfile(profile: TProfileProps): Promise<void>;
}
