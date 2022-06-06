<template>
  <ul
    class="error-messages"
    :key="idx"
    v-for="(error, idx) in validationErrors"
  >
    <li>{{ error }}</li>
  </ul>

  <form @submit.prevent="onSubmit">
    <fieldset v-if="isRegisterForm" class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Your Name"
        v-model="form.username"
      />
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
    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
      {{ buttonLabel }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { currentUserModel } from "@/entities/currentUser";
import { getApiErrorMessages } from "@/shared/lib";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps<{
  type: "register" | "login";
}>();
const router = useRouter();

const isRegisterForm = props.type === "register";

const buttonLabel = isRegisterForm ? "Sign Up" : "Sign In";

const validationErrors = ref<string[]>([]);

const form = reactive({
  email: "",
  password: "",
  username: "",
});

const onSubmit = async () => {
  validationErrors.value = [];

  try {
    if (isRegisterForm) {
      await currentUserModel.registerUser({ ...form });
    } else {
      await currentUserModel.loginUser({
        email: form.email,
        password: form.password,
      });
    }

    router.replace({ name: "home" });
  } catch (err: unknown) {
    const res = getApiErrorMessages(err);

    validationErrors.value = res;
  }
};
</script>
