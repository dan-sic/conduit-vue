import type { ProfileBase } from "../profile/types";

export type UpdateUserData = {
  email: string;
  bio: string;
  image: string;
  username: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = LoginData & {
  username: string;
};

export type AuthDto<T> = {
  user: T;
};

export type CurrentUserProfile = ProfileBase & {
  token: string;
  email: string;
};
