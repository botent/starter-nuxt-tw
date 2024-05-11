<script setup lang="ts">
import NavBar from '~/components/main/NavBar.vue'
</script>
<template>
  <div
    class="w-full min-h-screen flex flex-col items-start justify-start space-y-4"
  >
    <NavBar />
    <slot />
  </div>
</template>
