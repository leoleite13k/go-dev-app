type TProfile = {
  full_name: string;
  avatar_url: string;
  points: number;
  percent_level: number;
  level: number;
};

type TUser = {
  id: number;
  email: string;
  is_admin: string;
  profile: TProfile;
};

export interface AuthState {
  token: string;
  user: TUser;
}

interface SignInCredentials {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthContextData {
  user: TUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signUp(credentials: SignInCredentials): Promise<void>;
}
