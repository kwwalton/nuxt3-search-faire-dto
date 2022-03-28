<template>
  <div>
    <p>Products</p>
    <hr />
    <ul v-if="products.length">
      <li v-for="(product, index) in products" :key="index">
        {{ product.product.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// NOTE: As cool as the setup function is, it doesn't support name, inheritAttrs, or customOptions.
export default {
  name: 'products'
}
</script>

<script setup lang="ts">
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
