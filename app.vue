<script setup lang="ts">
import { loadingIndicator } from '~/lib/constants'

// ShadCn Components start
import Toaster from '@/components/ui/toast/Toaster.vue'
// ShadCn Components end

// SEO
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
    class: 'light',
  },
})

const title = 'Nuxt Starter'
const description =
  'Get clean and intuitive Nuxt starter configured with Shadcn'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo.png',
  twitterImage: '/logo.png',
  twitterCard: 'summary',
})
</script>
<template>
  <NuxtLoadingIndicator :throttle="0" :color="loadingIndicator" :height="5" />
  <NuxtLayout>
    <Toaster />

    <NuxtPage />
  </NuxtLayout>
</template>
