<template>
  <div>
    <v-container class="main-content">
      <slot />
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Only way to load icons',
  link: {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
  }
})
</script>
