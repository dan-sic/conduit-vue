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
import { articleModel } from "@/entities/article";
import { ref } from "vue";

const props = defineProps<{
  articleSlug: string;
}>();

const emits = defineEmits<{
  (e: "commentAdded"): void;
}>();

const commentBody = ref("");

const onSubmit = async () => {
  try {
    await articleModel.createCommentForArticle(props.articleSlug, {
      body: commentBody.value,
    });

    commentBody.value = "";
    emits("commentAdded");
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
