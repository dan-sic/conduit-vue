<template>
  <VLayout>
    <VHeader />

    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <RouterLink :to="{ name: 'register' }"
                >Don't an account yet?</RouterLink
              >
            </p>

            <VAuthForm type="login" />
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script setup lang="ts">
import { VLayout } from "@/shared/ui";
import { VHeader } from "@/widgets/header";
import { VAuthForm } from "@/features/auth";
import { RouterLink } from "vue-router";
</script>
