<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'home' }"
        >conduit</RouterLink
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li class="nav-item" v-if="currentUserModel.isAuthenticated.value">
          <RouterLink class="nav-link" :to="{ name: 'editor' }"
            ><i class="ion-compose"></i>&nbsp;New Article</RouterLink
          >
        </li>
        <li class="nav-item" v-if="currentUserModel.isAuthenticated.value">
          <RouterLink class="nav-link" :to="{ name: 'settings' }"
            ><i class="ion-gear-a"></i>&nbsp;Settings</RouterLink
          >
        </li>
        <li class="nav-item" v-if="!currentUserModel.isAuthenticated.value">
          <RouterLink class="nav-link" :to="{ name: 'login' }"
            >Sign in</RouterLink
          >
        </li>
        <li class="nav-item" v-if="!currentUserModel.isAuthenticated.value">
          <RouterLink class="nav-link" :to="{ name: 'register' }"
            >Sign up</RouterLink
          >
        </li>
        <li class="nav-item" v-if="currentUserModel.isAuthenticated.value">
          <VLogoutHeaderBtn />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { currentUserModel } from "@/entities/currentUser";
import { VLogoutHeaderBtn } from "@/features/auth";
</script>

<style scoped></style>
