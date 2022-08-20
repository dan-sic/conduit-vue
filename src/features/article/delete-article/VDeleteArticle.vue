<template>
  <button
    v-if="showButton"
    class="btn btn-sm btn-outline-danger"
    @click="onClick"
  >
    <i class="ion-ios-trash-outline"></i>
    &nbsp; Delete Article
  </button>
</template>

<script setup lang="ts">
import { articleApi } from "@/shared/api";
import { useRouter } from "vue-router";
import { currentUserModel } from "@/entities/currentUser";
import type { Article } from "@/shared/api/article";
import { computed } from "@vue/reactivity";

const router = useRouter();

const props = defineProps<{
  article: Article;
}>();

const showButton = computed(
  () =>
    currentUserModel.currentUser.value?.username ===
    props.article.author.username
);

const onClick = async () => {
  try {
    await articleApi.deleteArticle(props.article.slug);

    router.push({ name: "home" });
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
