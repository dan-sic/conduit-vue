<template>
  <button class="nav-link" @click.prevent="onClick">Logout</button>
</template>

<script setup lang="ts">
import { currentUserModel } from "@/entities/currentUser";
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = () => {
  currentUserModel.logoutUser();

  router.replace({ name: "login" });
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
}
</style>
