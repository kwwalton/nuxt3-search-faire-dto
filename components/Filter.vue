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
              @change="filterChange"
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
            @change="filterChange"
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
const emit = defineEmits(['filterChange'])
const props = defineProps({
  filter: {
    type: Object,
    required: true
  }
})
const checkbox = ref([] as string[])
const radioGroup = ref('')

const filterChange = () => {
  const filter = {
    key: props.filter.field_name,
    value:
      props.filter.selection_type === 'MULTIPLE'
        ? checkbox.value
        : radioGroup.value,
    isSelected:
      props.filter.selection_type === 'MULTIPLE' ? checkbox.value.length : true
  }
  emit('filterChange', filter)
  // TODO: handle query string updates
}

const setSelections = () => {
  // NOTE: checkboxes uses an array for values, radios uses a string
  if (props.filter.selection_type === 'MULTIPLE') {
    checkbox.value = props.filter.options
      .filter((option) => option.is_selected)
      .map((option) => option.key)
  } else {
    radioGroup.value =
      props.filter.options
        .filter((option) => option.is_selected)
        .map((option) => option.key)[0] || ''
  }
}

setSelections()
</script>
