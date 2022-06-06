import type {
  Article,
  ArticleDto,
  ArticlesDto,
  ArticlesParams,
  CommentDto,
  CommentsDto,
  NewArticleData,
  NewCommentData,
  UpdateArticleData,
} from "./types";
import { apiClient } from "../apiClient";
export * from "./types";

export const getArticles = (params: ArticlesParams) =>
  apiClient.get<ArticlesDto>("/articles", { params });

export const getArticle = (slug: string) =>
  apiClient.get<ArticleDto<Article>>(`/articles/${slug}`);

export const getArticlesFeed = () =>
  apiClient.get<ArticlesDto>("/articles/feed");

export const createArticle = (data: ArticleDto<NewArticleData>) =>
  apiClient.post<ArticleDto<Article>>("/articles", data);

export const updateArticle = (
  slug: string,
  data: ArticleDto<UpdateArticleData>
) => apiClient.put<ArticleDto<Article>>(`/articles/${slug}`, data);

export const deleteArticle = (articleSlug: string) =>
  apiClient.delete<void>(`/articles/${articleSlug}`);

export const favoriteArticle = (slug: string) =>
  apiClient.post<ArticleDto<Article>>(`/articles/${slug}/favorite`);

export const unfavoriteArticle = (slug: string) =>
  apiClient.delete<ArticleDto<Article>>(`/articles/${slug}/favorite`);

export const createCommentForArticle = (
  articleSlug: string,
  data: CommentDto<NewCommentData>
) =>
  apiClient.post<CommentDto<Comment>>(
    `/articles/${articleSlug}/comments`,
    data
  );

export const getCommentsForArticle = (articleSlug: string) =>
  apiClient.get<CommentsDto>(`/articles/${articleSlug}/comments`);

export const deleteCommentsForArticle = (
  articleSlug: string,
  commentId: UniqId
) => apiClient.delete<void>(`/articles/${articleSlug}/comments/${commentId}`);
