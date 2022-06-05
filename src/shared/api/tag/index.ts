import { apiClient } from "../apiClient";
import type { Tag } from "./types";

export const getAllTags = () => apiClient.get<Tag[]>("/tags");
