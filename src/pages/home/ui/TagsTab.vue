<template>
  <li class="nav-item">
    <span class="nav-link active">#{{ props.tagName }}</span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{ tagName: string }>();
</script>
