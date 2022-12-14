import type {
  RegisterData,
  LoginData,
  UpdateUserData,
  CurrentUserProfile,
} from "@/shared/api/auth";
import { computed, ref } from "vue";
import { authApi } from "@/shared/api";
import { persistAuthToken } from "@/shared/lib";
import { TOKEN_STORAGE_KEY } from "@/shared/lib";

export const currentUser = ref<CurrentUserProfile | null>(null);
export const isAuthenticated = computed(() => !!currentUser.value);

export const updateCurrentUser = async (data: UpdateUserData) => {
  const res = await authApi.updateUser({ user: data });

  currentUser.value = res.data.user;

  return res.data.user;
};

export const registerUser = async (data: RegisterData) => {
  const res = await authApi.register({ user: data });

  saveUser(res.data.user);
};

export const loginUser = async (data: LoginData) => {
  const res = await authApi.login({ user: data });

  saveUser(res.data.user);
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);

  currentUser.value = null;
};

export const checkIsUserAuthenticated = async () => {
  const res = await authApi.getCurrentUser();

  saveUser(res.data.user);
};

const saveUser = (profile: CurrentUserProfile) => {
  persistAuthToken(profile.token);

  currentUser.value = profile;
};
