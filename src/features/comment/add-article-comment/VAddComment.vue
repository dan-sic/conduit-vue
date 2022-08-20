<template>
  <form class="card comment-form" @submit.prevent="onSubmit">
    <div class="card-block">
      <textarea
        class="form-control"
        placeholder="Write a comment..."
        rows="3"
        v-model="commentBody"
      ></textarea>
    </div>
    <div class="card-footer">
      <button class="btn btn-sm btn-primary" type="submit">Post Comment</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { commentModel } from "@/entities/comment";
import { ref } from "vue";

const props = defineProps<{
  articleSlug: string;
}>();

const commentBody = ref("");

const onSubmit = async () => {
  try {
    await commentModel.createCommentForArticle(props.articleSlug, {
      body: commentBody.value,
    });

    commentBody.value = "";
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
