import { apiClient } from "../apiClient";
import type { UserProfileDto, Username } from "./types";
export * from "./types";

export const getProfile = (username: Username) =>
  apiClient.get<UserProfileDto>(`/profiles/${username}`);

export const followProfile = (username: Username) =>
  apiClient.post<UserProfileDto>(`/profiles/${username}/follow`);

export const unfollowProfile = (username: Username) =>
  apiClient.delete<UserProfileDto>(`/profiles/${username}/follow`);
