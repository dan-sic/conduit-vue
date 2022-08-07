<template>
  <VLayout>
    <VHeader />

    <div class="settings-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <VCurrentUserSettingsForm :currentUser="currentUser" />
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>

<script lang="ts" setup>
import { VHeader } from "@/widgets/header";
import { VLayout } from "@/shared/ui";
import { VCurrentUserSettingsForm } from "@/entities/currentUser/ui";
import { currentUserModel } from "@/entities/currentUser/index.js";

const currentUser = currentUserModel.currentUser;
</script>
