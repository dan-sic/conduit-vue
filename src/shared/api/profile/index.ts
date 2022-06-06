import { apiClient } from "../apiClient";
import type { ProfileDto } from "./types";
export * from "./types";

export const getProfile = (username: string) =>
  apiClient.get<ProfileDto>(`/profiles/${username}`);

export const followProfile = (username: string) =>
  apiClient.post<ProfileDto>(`/profiles/${username}/follow`);

export const unfollowProfile = (username: string) =>
  apiClient.delete<ProfileDto>(`/profiles/${username}/follow`);
