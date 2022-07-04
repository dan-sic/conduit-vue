import { apiClient } from "../apiClient";
import type { TagsDto } from "./types";
export * from "./types";

export const getAllTags = () => apiClient.get<TagsDto>("/tags");
