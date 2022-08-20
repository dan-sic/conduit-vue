<template>
  <RouterLink
    class="btn btn-sm btn-outline-secondary"
    :to="{ name: 'articleEdit', params: { articleSlug: slug } }"
  >
    <i class="ion-edit"></i>
    &nbsp; Edit Article
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  slug: string;
}>();
</script>
