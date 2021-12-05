import { AvatarProps } from '@bigheads/core';

export interface IProfile {
  fullName: string;
  avatarOptions: AvatarProps;
  percentLevel: number | null;
  level: number | null;
  points: number;
  position?: number;
}

type TProfileProps = {
  fullName: string;
  avatarOptions: AvatarProps;
};

export interface IProfileContextData {
  createProfile(profile: TProfileProps): Promise<void>;
  getProfile(): Promise<void>;
  updateProfile(profile: TProfileProps): Promise<void>;
}
