<template>
  <div class="filter">
    <p>{{ filter.display_name }}</p>
    <div>
      <template v-if="filter.selection_type === 'MULTIPLE'">
        <ul>
          <li v-for="(option, index) in filter.options" :key="index">
            <v-checkbox
              v-model="checkbox"
              :label="option.display_name"
              color="primary"
              :value="option.key"
              hide-details
            >
            </v-checkbox>
          </li>
        </ul>
      </template>
      <template v-if="filter.selection_type === 'SINGLE'">
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="(option, index) in filter.options"
            :key="index"
            :label="option.display_name"
            :value="option.key"
          ></v-radio>
        </v-radio-group>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
// NOTE: As cool as the setup function is, it doesn't support name, inheritAttrs, or customOptions.
export default {
  name: 'Filter'
}
</script>

<script setup lang="ts">
const props = defineProps({
  filter: {
    type: Object,
    required: true
  }
})
const checkbox = ref([] as string[])
const radioGroup = ref('')
// TODO: emit filter change event
</script>
