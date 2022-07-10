import type {
  RegisterData,
  LoginData,
  UpdateUserData,
  ProfileWithToken,
} from "@/shared/api/auth";
import type { Profile } from "@/shared/api/profile";
import { computed, ref } from "vue";
import { authApi } from "@/shared/api";
import { persistAuthToken } from "@/shared/lib";

export const currentUser = ref<Profile | null>(null);
export const isAuthenticated = computed(() => !!currentUser.value);

export const updateCurrentUser = async (data: UpdateUserData) => {
  const res = await authApi.updateUser({ user: data });

  currentUser.value = res.data.user;
};

export const registerUser = async (data: RegisterData) => {
  const res = await authApi.register({ user: data });

  saveUser(res.data.user);
};

export const loginUser = async (data: LoginData) => {
  const res = await authApi.login({ user: data });

  saveUser(res.data.user);
};

export const checkIsUserAuthenticated = async () => {
  const res = await authApi.getCurrentUser();

  saveUser(res.data.user);
};

const saveUser = (profile: ProfileWithToken) => {
  const { token, ...rest } = profile;

  persistAuthToken(token);

  currentUser.value = rest;
};
