import { AvatarProps } from '@bigheads/core';
import { IProfile } from '../profile/interface';

export type TUser = {
  id: number;
  email: string;
  isAdmin: boolean;
  profile?: IProfile;
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
  forgot(credentials: ICredentials): Promise<void>;
  updateAuth(credentials: ICredentials): Promise<void>;
}
