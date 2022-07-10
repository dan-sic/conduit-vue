<template>
  <VLayout>
    <VHeader />

    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <VArticleForm />
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script lang="ts">
export default {
  beforeRouteEnter: loadArticleBeforeRouteEnter,
};
</script>

<script lang="ts" setup>
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { VArticleForm } from "@/entities/article";
import { loadArticleBeforeRouteEnter } from "./lib";
</script>
