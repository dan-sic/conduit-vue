import type { RouteLocationNormalized } from "vue-router";
import { profileApi } from "@/shared/api";
import type { Username } from "@/shared/api/profile";

export const loadUserProfileBeforeRouteEnter = async (
  to: RouteLocationNormalized
) => {
  if (!to.params.userName) return true;

  try {
    const result = await profileApi.getProfile(to.params.userName as Username);

    to.meta.userProfile = result.data.profile;
  } catch (e: unknown) {
    console.log(e);
  }
};
