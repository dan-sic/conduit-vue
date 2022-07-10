<template>
  <div class="article-preview">
    <div class="article-meta">
      <VAuthorPreview
        :author="props.article.author"
        :article-date="props.article.createdAt"
      />
      <!-- <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> 29
      </button> -->
    </div>
    <RouterLink
      class="preview-link"
      :to="{ name: 'article', params: { articleSlug: article.slug } }"
    >
      <h1>{{ props.article.title }}</h1>
      <p>{{ props.article.description }}</p>
      <span>Read more...</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "@/shared/api/article";
import VAuthorPreview from "./VAuthorPreview.vue";
import { RouterLink } from "vue-router";
const props = defineProps<{
  article: Article;
}>();
</script>

<style scoped></style>
