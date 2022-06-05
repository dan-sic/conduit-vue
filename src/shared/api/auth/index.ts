import { apiClient } from "../apiClient";
import type {
  AuthDto,
  LoginData,
  ProfileWithToken,
  RegisterData,
  UpdateUserData,
} from "./types";

export const register = (data: AuthDto<RegisterData>) =>
  apiClient.post<ProfileWithToken>("ProfileWithTokens", { data });

export const login = (data: AuthDto<LoginData>) =>
  apiClient.post<ProfileWithToken>("users/login", { data });

export const updateUser = (data: AuthDto<UpdateUserData>) =>
  apiClient.post<ProfileWithToken>("users/login", { data });

export const getCurrentUser = () => apiClient.get<ProfileWithToken>("user");
