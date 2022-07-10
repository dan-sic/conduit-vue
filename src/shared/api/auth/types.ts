import type { ProfileBase } from "../profile/types";

export type UpdateUserData = {
  email: string;
};

export type LoginData = UpdateUserData & {
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
