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
              </ul>
            </div>

            <RouterView :key="key" />
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <a href="" class="tag-pill tag-default">programming</a>
                <a href="" class="tag-pill tag-default">javascript</a>
                <a href="" class="tag-pill tag-default">emberjs</a>
                <a href="" class="tag-pill tag-default">angularjs</a>
                <a href="" class="tag-pill tag-default">react</a>
                <a href="" class="tag-pill tag-default">mean</a>
                <a href="" class="tag-pill tag-default">node</a>
                <a href="" class="tag-pill tag-default">rails</a>
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

const { key, updateRouterViewKey } = useResetRouterView();
</script>
