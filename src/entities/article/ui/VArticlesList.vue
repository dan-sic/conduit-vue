<template>
  <template v-if="isLoading"
    ><div class="placeholder">Loading...</div></template
  >
  <template v-else-if="isNoArticles"
    ><div class="placeholder">No articles yet</div></template
  >
  <template v-else>
    <VArticlePreview
      :key="article.slug"
      v-for="article in articles"
      :article="article"
    />
    <button @click="currentPage++">Load more</button>
  </template>
</template>

<script setup lang="ts">
import { VArticlePreview } from "@/entities/article";
import {
  getArticles,
  getArticlesFeed,
  type Article,
  type ArticlesDto,
} from "@/shared/api/article";
import type { Username } from "@/shared/api/profile";
import type { Tag } from "@/shared/api/tag";
import { computed } from "@vue/reactivity";
import type { AxiosResponse } from "axios";
import { ref, watchEffect } from "vue";

const props = defineProps<{
  tag?: Tag;
  author?: Username;
  favorited?: Username;
  showFeed?: boolean;
}>();

const currentPage = ref(1);
const limit = 2;
const offset = computed(() => (currentPage.value - 1) * limit);

const articles = ref<Article[]>([]);
const isLoading = ref(false);
const isNoArticles = computed(
  () => !isLoading.value && articles.value.length === 0
);

watchEffect(async () => {
  isLoading.value = true;

  const paginationParams = { offset: offset.value, limit };

  try {
    let response: AxiosResponse<ArticlesDto>;

    if (props.showFeed) {
      response = await getArticlesFeed(paginationParams);
    } else {
      response = await getArticles({
        ...paginationParams,
        tag: props.tag,
        author: props?.author,
        favorited: props?.favorited,
      });
    }

    articles.value = [...articles.value, ...response.data.articles];
  } catch (e: unknown) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.placeholder {
  position: absolute;
}
</style>
