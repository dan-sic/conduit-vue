import { apiClient } from "../apiClient";
import type {
  AuthDto,
  LoginData,
  ProfileWithToken,
  RegisterData,
  UpdateUserData,
} from "./types";
export * from "./types";

export const register = (data: AuthDto<RegisterData>) =>
  apiClient.post<AuthDto<ProfileWithToken>>("/users", data);

export const login = (data: AuthDto<LoginData>) =>
  apiClient.post<AuthDto<ProfileWithToken>>("/users/login", data);

export const updateUser = (data: AuthDto<UpdateUserData>) =>
  apiClient.post<AuthDto<ProfileWithToken>>("/users/login", data);

export const getCurrentUser = () =>
  apiClient.get<AuthDto<ProfileWithToken>>("/user");
