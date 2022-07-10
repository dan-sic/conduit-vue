import { articleApi } from "@/shared/api";
import type { NewArticleData, UpdateArticleData } from "@/shared/api/article";

export const createArticle = async (article: NewArticleData) => {
  const res = await articleApi.createArticle({ article: article });

  return res.data;
};

export const updateArticle = async (
  slug: string,
  article: UpdateArticleData
) => {
  const res = await articleApi.updateArticle(slug, { article: article });

  return res.data;
};
