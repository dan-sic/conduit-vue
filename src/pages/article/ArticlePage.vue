<template>
  <VLayout>
    <VHeader />
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{{ article.title }}</h1>

          <div class="article-meta">
            <VAuthorPreview
              :author="article.author"
              :article-date="article.createdAt"
            />
            <template v-if="!isCurrentUserArticle">
              <VFollowProfile v-model="author" />
              &nbsp;&nbsp;
              <VFavouriteArticle v-model="article" />
            </template>
            <template v-if="isCurrentUserArticle">
              <VArticleEditLink :slug="article.slug" />
              &nbsp;&nbsp;
              <VDeleteArticle :slug="article.slug" />
            </template>
          </div>
        </div>
      </div>

      <div class="container page">
        <div class="row article-content">
          <div class="col-md-12">
            <!-- <p>
            Web development technologies have evolved at an incredible clip over
            the past few years.
          </p> -->
            <h2 id="introducing-ionic">{{ article.description }}</h2>
            <p>{{ article.body }}</p>
          </div>
        </div>

        <hr />

        <div class="article-actions">
          <div class="article-meta">
            <VAuthorPreview
              :author="article.author"
              :article-date="article.createdAt"
            />
            <template v-if="!isCurrentUserArticle">
              <VFollowProfile v-model="author" />
              &nbsp;&nbsp;
              <VFavouriteArticle v-model="article" />
            </template>
            <template v-if="isCurrentUserArticle">
              <VArticleEditLink :slug="article.slug" />
              &nbsp;&nbsp;
              <VDeleteArticle :slug="article.slug" />
            </template>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <VAddArticleComment
              :article-slug="article.slug"
              @commentAdded="onCommentAdded"
            />
            <VArticlesComments :comments="articleComments" />
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
import { loadArticleBeforeRouteEnter } from "./lib";
import { useRouter } from "vue-router";
import type { Article, Comment } from "@/shared/api/article";
import { VFollowProfile } from "@/features/profile";
import {
  VFavouriteArticle,
  VAddArticleComment,
  VDeleteArticle,
} from "@/features/article";
import { VArticleEditLink } from "@/entities/article";
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import {
  VAuthorPreview,
  VArticlesComments,
  articleModel,
} from "@/entities/article";
import { onMounted, ref } from "vue";
import { currentUserModel } from "@/entities/currentUser";
import { computed } from "@vue/reactivity";

const router = useRouter();

const article = ref(router.currentRoute.value.meta.article as Article);
const author = ref(article.value.author);
const isCurrentUserArticle = computed(
  () => currentUserModel.currentUser.value?.username === author.value.username
);

const articleComments = ref<Comment[]>([]);

onMounted(() => {
  fetchComments();
});

const onCommentAdded = () => {
  fetchComments();
};

const fetchComments = async () => {
  try {
    const res = await articleModel.getCommentsForArticle(article.value.slug);
    articleComments.value = res.comments;
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
