<template>
  <slot></slot>
  <footer>
    <div class="container">
      <RouterLink class="logo-font" :to="{ name: 'home' }">conduit</RouterLink>
      <span class="attribution">
        An interactive learning project from
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
