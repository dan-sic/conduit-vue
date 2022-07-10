<template>
  <VLayout>
    <VHeader />

    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <VArticleForm />
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script lang="ts">
export default {
  beforeRouteEnter: async (to) => {
    if (!to.params.articleSlug) return true;

    try {
      const result = await articleApi.getArticle(
        to.params.articleSlug as string
      );

      to.meta.editedArticle = result.data.article;
    } catch (e: unknown) {
      console.log(e);
    }
  },
};
</script>

<script lang="ts" setup>
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { VArticleForm } from "@/features/article";
import { articleApi } from "@/shared/api";
</script>
