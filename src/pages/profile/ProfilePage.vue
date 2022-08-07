<template>
  <VLayout>
    <VHeader />
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img
                :src="
                  userProfile?.image ||
                  'https://api.realworld.io/images/demo-avatar.png'
                "
                class="user-img"
              />
              <h4>{{ userProfile?.username }}</h4>
              <p>
                {{ userProfile?.bio }}
              </p>
              <!-- <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button> -->
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <RouterLink
                    @click="updateRouterViewKey"
                    class="nav-link"
                    :to="{ name: 'user', params: { userName } }"
                    >My Articles</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink
                    @click="updateRouterViewKey"
                    class="nav-link"
                    :to="{ name: 'userFavourited', params: { userName } }"
                    >Favourited Articles</RouterLink
                  >
                </li>
              </ul>
            </div>

            <RouterView :key="key" />

            <!-- <div class="article-preview">
              <div class="article-meta">
                <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                <div class="info">
                  <a href="" class="author">Albert Pai</a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 32
                </button>
              </div>
              <a href="" class="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul class="tag-list">
                  <li class="tag-default tag-pill tag-outline">Music</li>
                  <li class="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script lang="ts">
export default {
  beforeRouteEnter: loadUserProfileBeforeRouteEnter,
};
</script>

<script setup lang="ts">
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useResetRouterView } from "@/shared/lib";
import { useRoute } from "vue-router";
import type { Username, UserProfile } from "@/shared/api/profile";
import { loadUserProfileBeforeRouteEnter } from "./lib";

const { key, updateRouterViewKey } = useResetRouterView();
const route = useRoute();
const router = useRouter();

const userProfile = router.currentRoute.value.meta.userProfile as
  | UserProfile
  | undefined;

const userName = route.params.userName as Username;
</script>
