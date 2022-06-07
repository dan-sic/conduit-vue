<template>
  <div class="article-preview">
    <div class="article-meta">
      <RouterLink :to="{ name: 'home' }">
        <img src="https://api.realworld.io/images/demo-avatar.png" />
        <div class="info">
          <span href="" class="author">{{
            props.article.author.username
          }}</span>
          <span class="date">{{ formattedDate }}</span>
        </div>
      </RouterLink>
      <!-- <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> 29
      </button> -->
    </div>
    <RouterLink class="preview-link" :to="{ name: 'article' }">
      <h1>{{ props.article.title }}</h1>
      <p>{{ props.article.description }}</p>
      <span>Read more...</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "@/shared/api/article";
import { getFormattedDate } from "@/shared/lib";
import { computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps<{
  article: Article;
}>();

const formattedDate = computed(() =>
  getFormattedDate(new Date(props.article.createdAt))
);
</script>

<style scoped></style>
