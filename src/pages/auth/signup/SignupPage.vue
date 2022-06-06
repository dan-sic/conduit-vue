<template>
  <VLayout>
    <VHeader />
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <RouterLink :to="{ name: 'login' }">Have an account?</RouterLink>
            </p>

            <VAuthForm type="register" />
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script setup lang="ts">
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { VAuthForm } from "@/features/auth";
import { RouterLink } from "vue-router";
</script>
