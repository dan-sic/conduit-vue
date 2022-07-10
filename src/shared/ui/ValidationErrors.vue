<template>
  <ul class="error-messages">
    <li :key="idx" v-for="(error, idx) in props.validationErrors">
      {{ error }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  validationErrors: string[];
}>();
</script>
