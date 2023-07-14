<script setup>
import { ref } from "vue";

const props = defineProps({
  selected: 0,
  countries: {
    type: Array,
    default: () => [],
  },
});

const countryRef = ref({});

const emit = defineEmits(["get-country"]);

const countryList = [...new Set(props.countries)];

async function onSelect() {
  const selectedCountry = countryRef.value.value;
  const index = countryList.indexOf(countryRef.value.value);

  emit("get-country", { selectedCountry }, { index });
}
</script>

<template>
  <select
    @change="onSelect"
    ref="countryRef"
    :v-model="selected"
    class="form-select mt-10 block w-full border p-3 rounded"
  >
    <option value="no-country">Select Country</option>
    <option v-for="country in countryList" :key="country" :value="country">
      {{ country }}
    </option>
  </select>
</template>
