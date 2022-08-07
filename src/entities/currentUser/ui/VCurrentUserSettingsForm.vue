<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <fieldset class="form-group">
        <input
          class="form-control"
          type="text"
          placeholder="URL of profile picture"
          v-model="form.image"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Your Name"
          v-model="form.username"
        />
      </fieldset>
      <fieldset class="form-group">
        <textarea
          class="form-control form-control-lg"
          rows="8"
          placeholder="Short bio about you"
          v-model="form.bio"
        ></textarea>
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Email"
          v-model="form.email"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="password"
          placeholder="Password"
          v-model="form.password"
        />
      </fieldset>
      <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
        Update Settings
      </button>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import type { CurrentUserProfile } from "@/shared/api/auth/types.js";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { currentUserModel } from "../index.js";
const props = defineProps<{
  currentUser: CurrentUserProfile | null;
}>();

const router = useRouter();

const form = reactive({
  email: props.currentUser?.email ?? "",
  bio: props.currentUser?.bio ?? "",
  image: props.currentUser?.image ?? "",
  username: props.currentUser?.username ?? "",
  password: "",
});

const onSubmit = async () => {
  try {
    const user = await currentUserModel.updateCurrentUser({ ...form });

    router.push({ name: "user", params: { userName: user.username } });
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
