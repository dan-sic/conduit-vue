import type { Profile, Username } from "../profile/types";
import type { Tag } from "../tag/types";

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tags: Tag[];
  createdAt: DateAsISOString;
  updatedAt: DateAsISOString;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};

export type ArticlesDto = {
  articles: Article[];
  articlesCount: number;
};

export type ArticleDto<T> = {
  article: T;
};

export type NewArticleData = Pick<Article, "title" | "description" | "body"> & {
  tagList: Tag[];
};

export type UpdateArticleData = Pick<Article, "body">;

export type ArticlesParams = Partial<{
  tag: Tag;
  favorited: Username;
  username: Username;
}>;

export type Comment = {
  id: UniqId;
  createdAt: DateAsISOString;
  updatedAt: DateAsISOString;
  body: string;
  author: Profile;
};

export type CommentsDto = {
  comments: Comment[];
};

export type CommentDto<T> = {
  comment: T;
};

export type NewCommentData = Pick<Comment, "body">;
