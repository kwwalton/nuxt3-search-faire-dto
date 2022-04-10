<template>
  <div class="filters">
    <p>Filters</p>
    <hr />
    <ul v-if="filters.length">
      <li v-for="(filter, index) in filters" :key="index">
        <Filter :filter="filter" @filterChange="handleChange" />
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
const filtersList = ref([...props.filters])
let filterManager = ref({
  MAKER_MINIMUM: [
    {
      key: 'maker_minimum:no_minimum',
      is_selected: false
    },
    {
      key: 'maker_minimum:less_or_equal_to_100_dollars',
      is_selected: false
    },
    {
      key: 'maker_minimum:less_or_equal_to_200_dollars',
      is_selected: false
    },
    {
      key: 'maker_minimum:less_or_equal_to_300_dollars',
      is_selected: false
    }
  ],

  MAKER_VALUE: [
    {
      key: 'maker_value:charitable',
      is_selected: false
    },
    {
      key: 'maker_value:eco_friendly',
      is_selected: false
    },
    {
      key: 'maker_value:hand_made',
      is_selected: false
    }
  ]
})
const handleChange = (filter: any) => {
  console.log(filter)
  // TODO: find the filter in the filters list and update it, the key is the filter, the value is the value
  const index = Object.keys(filterManager.value).findIndex(
    (x) => x === filter.key
  )
  console.log(index)
  // EXAMPLE: filterManager.value.MAKER_MINIMUM[index].is_selected = filter.is_selected
  // filterManager.value[filter.key][index].is_selected =
  // Maybe instead, emit an object representing the entire filter?
}
</script>
