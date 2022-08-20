<template>
  <button v-if="showButton" class="btn btn-sm" @click="onClick">
    <i class="ion-ios-trash-outline"></i>
  </button>
</template>

<script setup lang="ts">
import { commentModel } from "@/entities/comment";
import { currentUserModel } from "@/entities/currentUser";
import type { Article } from "@/shared/api/article";

const props = defineProps<{
  article: Pick<Article, "slug" | "author">;
  // eslint-disable-next-line no-undef
  commentId: UniqId;
}>();

const showButton =
  currentUserModel.currentUser.value?.username ===
  props.article.author.username;

const onClick = async () => {
  try {
    await commentModel.deleteCommentForArticle(
      props.article.slug,
      props.commentId
    );
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
