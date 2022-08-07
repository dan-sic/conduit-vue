<template>
  <VArticlesList :author="author" />
</template>

<script setup lang="ts">
import { VArticlesList } from ".";
import { useRoute } from "vue-router";
import type { Username } from "@/shared/api/profile";

const route = useRoute();

const author = route.params.userName as Username;
</script>
