<template>
  <ValidationErrors :validationErrors="validationErrors" />

  <form @submit.prevent="onSubmit">
    <fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="Article Title"
          v-model="form.title"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="What's this article about?"
          v-model="form.description"
        />
      </fieldset>
      <fieldset class="form-group">
        <textarea
          class="form-control"
          rows="8"
          placeholder="Write your article (in markdown)"
          v-model="form.body"
        ></textarea>
      </fieldset>
      <VTagControl v-model="form.tagList" />
      <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
        Publish Article
      </button>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { articleModel } from "@/entities/article";
import { getApiErrorMessages } from "@/shared/lib";
import { ValidationErrors } from "@/shared/ui";
import { useRouter } from "vue-router";
import type { Article } from "@/shared/api/article";
import VTagControl from "./VTagControl.vue";

const router = useRouter();

const editedArticle = router.currentRoute.value.meta.editedArticle as
  | Article
  | undefined;

const form = reactive({
  title: editedArticle?.title ?? "",
  description: editedArticle?.description ?? "",
  body: editedArticle?.body ?? "",
  tagList: editedArticle?.tagList ?? [],
});

const validationErrors = ref<string[]>([]);

const onSubmit = async () => {
  try {
    if (editedArticle) {
      await articleModel.updateArticle(editedArticle.slug, form);
    } else {
      await articleModel.createArticle(form);
    }

    router.push({ name: "home" });
  } catch (e: unknown) {
    const errors = getApiErrorMessages(e);

    validationErrors.value = errors;
  }
};
</script>
