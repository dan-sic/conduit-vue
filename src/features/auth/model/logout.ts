import { TOKEN_STORAGE_KEY } from "@/shared/lib";

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
