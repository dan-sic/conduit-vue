import type { Profile } from "../profile/types";

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

export type ProfileWithToken = Profile & {
  token: string;
};
