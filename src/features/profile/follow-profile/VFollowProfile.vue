<template>
  <button
    v-if="showButton"
    class="btn btn-sm"
    :class="[followingProfile ? 'btn-secondary' : 'btn-outline-secondary']"
    @click="onClick"
  >
    <i class="ion-plus-round"></i>
    &nbsp; {{ followingProfile ? "Unfollow" : "Follow" }}
    {{ props.profile.username }}
  </button>
</template>

<script setup lang="ts">
import { currentUserModel } from "@/entities/currentUser";
import { profileModel } from "@/entities/profile";
import type { UserProfile } from "@/shared/api/profile";
import { ref } from "vue";

const props = defineProps<{
  profile: UserProfile;
}>();

const showButton =
  currentUserModel.currentUser.value?.username !== props.profile.username;

const followingProfile = ref(props.profile.following);

const onClick = async () => {
  try {
    if (followingProfile.value) {
      await profileModel.unfollowProfile(props.profile.username);

      followingProfile.value = false;
    } else {
      await profileModel.followProfile(props.profile.username);

      followingProfile.value = true;
    }
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
