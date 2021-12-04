import { AvatarProps } from '@bigheads/core';

type TProfile = {
  fullName: string;
  avatarOptions: AvatarProps;
  points: number;
  percentLevel: number;
  level: number;
};

export type TUser = {
  id: number;
  email: string;
  is_admin: string;
  profile?: TProfile;
};

export interface AuthState {
  token: string;
  user: TUser;
}

interface ICredentials {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthContextData {
  user: TUser;
  setData: React.Dispatch<React.SetStateAction<AuthState>>;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
  signUp(credentials: ICredentials): Promise<void>;
}
