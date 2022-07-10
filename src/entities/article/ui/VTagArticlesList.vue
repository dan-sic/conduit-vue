<template>
  <VArticlesList :tag="tag" />
</template>

<script setup lang="ts">
import { VArticlesList } from ".";
import { useRoute } from "vue-router";
import type { Tag } from "@/shared/api/tag";

const route = useRoute();

const tag = route.params.tagName as Tag;
</script>
