<template>
  <img
    :src="
      props.author.image ?? 'https://api.realworld.io/images/demo-avatar.png'
    "
  />
  <div class="info">
    <RouterLink
      class="author"
      :to="{ name: 'user', params: { userName: props.author.username } }"
    >
      {{ props.author.username }}
    </RouterLink>
    <span class="date">{{ formattedDate }}</span>
  </div>
</template>

<script setup lang="ts">
import type { UserProfile } from "@/shared/api/profile";
import { getFormattedDate } from "@/shared/lib";
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps<{
  author: UserProfile;
  articleDate: DateAsISOString;
}>();

const formattedDate = computed(() =>
  getFormattedDate(new Date(props.articleDate))
);
</script>

<style scoped></style>
