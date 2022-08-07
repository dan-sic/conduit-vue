import { apiClient } from "../apiClient";
import type {
  AuthDto,
  LoginData,
  CurrentUserProfile,
  RegisterData,
  UpdateUserData,
} from "./types";
export * from "./types";

export const register = (data: AuthDto<RegisterData>) =>
  apiClient.post<AuthDto<CurrentUserProfile>>("/users", data);

export const login = (data: AuthDto<LoginData>) =>
  apiClient.post<AuthDto<CurrentUserProfile>>("/users/login", data);

export const updateUser = (data: AuthDto<UpdateUserData>) => {
  console.log(data);
  return apiClient.put<AuthDto<CurrentUserProfile>>("/user", data);
};

export const getCurrentUser = () =>
  apiClient.get<AuthDto<CurrentUserProfile>>("/user");
