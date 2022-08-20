<template>
  <button
    class="btn btn-sm"
    :class="[
      props.modelValue.following ? 'btn-secondary' : 'btn-outline-secondary',
    ]"
    @click="onClick"
  >
    <i class="ion-plus-round"></i>
    &nbsp; {{ props.modelValue.following ? "Unfollow" : "Follow" }}
    {{ props.modelValue.username }}
  </button>
</template>

<script setup lang="ts">
import { profileModel } from "@/entities/profile";
import type { UserProfile } from "@/shared/api/profile";

const props = defineProps<{
  modelValue: UserProfile;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", author: UserProfile): void;
}>();

const onClick = async () => {
  let userProfile: UserProfile;

  try {
    if (props.modelValue.following) {
      userProfile = await profileModel.unfollowProfile(
        props.modelValue.username
      );
    } else {
      userProfile = await profileModel.followProfile(props.modelValue.username);
    }
    emits("update:modelValue", userProfile);
  } catch (e: unknown) {
    console.log(e);
  }
};
</script>
