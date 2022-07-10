import type { Username, UserProfile } from "../profile/types";
import type { Tag } from "../tag/types";

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
  createdAt: DateAsISOString;
  updatedAt: DateAsISOString;
  favorited: boolean;
  favoritesCount: number;
  author: UserProfile;
};

export type ArticlesDto = {
  articles: Article[];
  articlesCount: number;
};

export type ArticleDto<T> = {
  article: T;
};

export type NewArticleData = Pick<Article, "title" | "description" | "body"> & {
  tagList?: Tag[];
};

export type UpdateArticleData = Partial<NewArticleData>;

export type ArticlesPaginationParams = {
  offset: number;
  limit: number;
};

export type ArticlesParams = ArticlesPaginationParams &
  Partial<{
    tag: Tag;
    favorited: Username;
    author: Username;
  }>;

export type Comment = {
  id: UniqId;
  createdAt: DateAsISOString;
  updatedAt: DateAsISOString;
  body: string;
  author: UserProfile;
};

export type CommentsDto = {
  comments: Comment[];
};

export type CommentDto<T> = {
  comment: T;
};

export type NewCommentData = Pick<Comment, "body">;
