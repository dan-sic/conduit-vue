import { articleApi } from "@/shared/api";
import type { Comment } from "@/shared/api/article";
import { ref } from "vue";
import type { NewCommentData } from "@/shared/api/article";

interface ArticleComments {
  [slug: string]: Comment[];
}

export const articlesComments = ref<ArticleComments>({});

export const getCommentsForArticle = async (slug: string) => {
  const res = await articleApi.getCommentsForArticle(slug);

  articlesComments.value = {
    ...articlesComments.value,
    [slug]: res.data.comments,
  };
};

export const createCommentForArticle = async (
  slug: string,
  data: NewCommentData
) => {
  const res = await articleApi.createCommentForArticle(slug, { comment: data });

  articlesComments.value = {
    ...articlesComments.value,
    [slug]: [...articlesComments.value[slug], res.data.comment],
  };
};

export const deleteCommentForArticle = async (
  slug: string,
  commentId: UniqId
) => {
  await articleApi.deleteCommentForArticle(slug, commentId);

  articlesComments.value = {
    ...articlesComments.value,
    [slug]: articlesComments.value[slug].filter((c) => c.id !== commentId),
  };
};
