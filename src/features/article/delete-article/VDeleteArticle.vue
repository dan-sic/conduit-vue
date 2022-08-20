<template>
  <button class="btn btn-sm btn-outline-danger" @click="onClick">
    <i class="ion-ios-trash-outline"></i>
    &nbsp; Delete Article
  </button>
</template>

<script setup lang="ts">
import { articleApi } from "@/shared/api";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  slug: string;
}>();

const onClick = async () => {
  try {
    await articleApi.deleteArticle(props.slug);

    router.push({ name: "home" });
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
