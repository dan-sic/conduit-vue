<template>
  <button
    v-if="showButton"
    class="btn btn-sm"
    :class="[favouritedArticle ? 'btn-primary' : 'btn-outline-primary']"
    @click="onClick"
  >
    <i class="ion-heart"></i>
    &nbsp; {{ favouritedArticle ? "Unfavorite" : "Favorite" }} &nbsp; Article
    &nbsp; <span class="counter">({{ favouritedCount }})</span>
  </button>
</template>

<script setup lang="ts">
import { articleModel } from "@/entities/article";
import { currentUserModel } from "@/entities/currentUser";
import type { Article } from "@/shared/api/article";
import { ref } from "vue";

const props = defineProps<{
  article: Article;
}>();

const showButton =
  currentUserModel.currentUser.value?.username !==
  props.article.author.username;

const favouritedArticle = ref(props.article.favorited);
const favouritedCount = ref(props.article.favoritesCount);

const onClick = async () => {
  try {
    if (favouritedArticle.value) {
      await articleModel.unfavoriteArticle(props.article.slug);

      favouritedArticle.value = false;
      favouritedCount.value--;
    } else {
      await articleModel.favoriteArticle(props.article.slug);

      favouritedArticle.value = true;
      favouritedCount.value++;
    }
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
