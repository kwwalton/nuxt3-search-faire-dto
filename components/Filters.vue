<template>
  <div class="filters">
    <p>Filters</p>
    <hr />
    <ul v-if="filters.length">
      <li v-for="(filter, index) in filters" :key="index">
        <Filter :filter="filter" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// NOTE: As cool as the setup function is, it doesn't support name, inheritAttrs, or customOptions.
export default {
  name: 'Filters'
}
</script>

<script setup lang="ts">
const props = defineProps({
  filters: {
    type: Array,
    required: true
  }
})
</script>
