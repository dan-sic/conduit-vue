import { articleApi } from "@/shared/api";
import type {
  NewArticleData,
  NewCommentData,
  UpdateArticleData,
} from "@/shared/api/article";

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

export const favoriteArticle = async (slug: string) => {
  const res = await articleApi.favoriteArticle(slug);

  return res.data.article;
};

export const unfavoriteArticle = async (slug: string) => {
  const res = await articleApi.unfavoriteArticle(slug);

  return res.data.article;
};

export const deleteArticle = async (slug: string) => {
  articleApi.deleteArticle(slug);
};

// export const getCommentsForArticle = async (slug: string) => {
//   const res = await articleApi.getCommentsForArticle(slug);

//   return res.data;
// };

// export const createCommentForArticle = async (
//   slug: string,
//   data: NewCommentData
// ) => {
//   const res = await articleApi.createCommentForArticle(slug, { comment: data });

//   return res.data;
// };
