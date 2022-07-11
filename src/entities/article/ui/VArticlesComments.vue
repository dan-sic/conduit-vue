<template>
  <div class="card" v-for="comment in props.comments" :key="comment.id">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <span class="comment-author">
        <img
          class="comment-author-img"
          :src="
            comment.author.image ??
            'https://api.realworld.io/images/demo-avatar.png'
          "
        />
      </span>
      &nbsp;
      <RouterLink class="comment-author" :to="{ name: 'home' }">
        {{ comment.author.username }}
      </RouterLink>
      <span class="date-posted">{{
        getFormattedDate(new Date(comment.createdAt))
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Comment } from "@/shared/api/article";
import { getFormattedDate } from "@/shared/lib";
import { RouterLink } from "vue-router";

const props = defineProps<{
  comments: Comment[];
}>();
</script>
