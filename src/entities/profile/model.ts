import { profileApi } from "@/shared/api";
import type { Username } from "@/shared/api/profile";

export const followProfile = async (username: Username) => {
  const res = await profileApi.followProfile(username);

  return res.data.profile;
};

export const unfollowProfile = async (username: Username) => {
  const res = await profileApi.unfollowProfile(username);

  return res.data.profile;
};
