<template>
  <div>
    <h1>Search page</h1>
    <nuxt-link to="/">Go back home</nuxt-link>
    <hr />

    <div>
      <nuxt-link to="/search/products" @click="getProducts">Products</nuxt-link>
      |
      <nuxt-link to="/search/brands">Brands</nuxt-link>
    </div>
    <div class="search__wrapper">
      <aside>
        <Filters :filters="filters" />
      </aside>
      <section>
        <NuxtChild :products="products" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
// NOTE: As cool as the setup function is, it doesn't support name, inheritAttrs, or customOptions.
export default {
  name: 'search'
}
</script>

<script setup lang="ts">
// NOTE: when objects or arrays are reactive, you can only update properties, not the whole object.
// https://markus.oberlehner.net/blog/vue-3-composition-api-ref-vs-reactive/
const route = useRoute()
let resData = ref({})
let isLoading = ref(false)
let filters = ref([])
let products = ref([])
const getProducts = async () => {
  isLoading.value = true
  try {
    const { data } = await useFetch(`/api/search/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: route.query.q
      })
    })
    resData.value = data
    filters.value = data.value.filter_sections
    products.value = data.value.product_tiles
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

getProducts()
</script>

<style scoped>
.search__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search__wrapper aside {
  width: 300px;
  background-color: pink;
}
.search__wrapper section {
  background-color: lightblue;
  width: 100%;
}
</style>
