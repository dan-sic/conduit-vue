<template>
  <button class="nav-link" @click.prevent="onClick">Logout</button>
</template>

<script setup lang="ts">
import { logoutUser } from "../model/logout";
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = () => {
  logoutUser();

  router.replace({ name: "login" });
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
}
</style>
