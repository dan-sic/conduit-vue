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
import { computed } from "@vue/reactivity";

const props = defineProps<{
  modelValue: Article;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", article: Article): void;
}>();

const showButton = computed(
  () =>
    currentUserModel.currentUser.value?.username !==
    props.modelValue.author.username
);

const favouritedArticle = computed(() => props.modelValue.favorited);
const favouritedCount = computed(() => props.modelValue.favoritesCount);

const onClick = async () => {
  let article: Article;
  try {
    if (favouritedArticle.value) {
      article = await articleModel.unfavoriteArticle(props.modelValue.slug);
    } else {
      article = await articleModel.favoriteArticle(props.modelValue.slug);
    }

    emits("update:modelValue", article);
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
