<template>
  <div class="search-input">
    <v-form>
      <v-text-field
        v-model="searchTerm"
        label="search this website"
        append-icon="search"
        @keyup.enter="search"
      />
    </v-form>
  </div>
</template>

<script lang="ts">
// NOTE: As cool as the setup function is, it doesn't support name, inheritAttrs, or customOptions.
export default {
  name: 'SearchInput'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const searchTerm = ref('')
const router = useRouter()
const route = useRoute()

const search = () => {
  router.push({
    path: '/search/products',
    query: {
      q: searchTerm.value
    }
  })
}
</script>
