<template>
  <VLayout>
    <VHeader />

    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <RouterLink
                    v-if="isAuthenticated"
                    @click="updateRouterViewKey"
                    class="nav-link"
                    :to="{ name: 'feed' }"
                    >Your Feed</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink
                    class="nav-link"
                    :to="{ name: 'home' }"
                    @click="updateRouterViewKey"
                    >Global Feed</RouterLink
                  >
                </li>
                <RouterView name="TagsTab" />
              </ul>
            </div>

            <RouterView :key="key" />
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <RouterLink
                  v-for="(tag, idx) in tags"
                  :key="idx"
                  :to="{ name: 'tag', params: { tagName: tag } }"
                  class="tag-pill tag-default"
                  @click="updateRouterViewKey"
                  >{{ tag }}</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script lang="ts" setup>
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { RouterLink, RouterView } from "vue-router";
import { useResetRouterView } from "@/shared/lib";
import { isAuthenticated } from "@/entities/currentUser/model";
import { tagApi } from "@/shared/api";
import { onMounted, ref } from "vue";
import type { Tag } from "@/shared/api/tag";

const { key, updateRouterViewKey } = useResetRouterView();

const tags = ref<Tag[]>([]);

onMounted(async () => {
  try {
    tags.value = (await tagApi.getAllTags()).data.tags;
  } catch (e: unknown) {
    console.log(e);
  }
});
</script>
