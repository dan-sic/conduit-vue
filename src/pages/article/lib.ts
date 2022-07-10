import type { RouteLocationNormalized } from "vue-router";
import { articleApi } from "@/shared/api";

export const loadArticleBeforeRouteEnter = async (
  to: RouteLocationNormalized
) => {
  if (!to.params.articleSlug) return true;

  try {
    const result = await articleApi.getArticle(to.params.articleSlug as string);

    to.meta.article = result.data.article;
  } catch (e: unknown) {
    console.log(e);
  }
};
