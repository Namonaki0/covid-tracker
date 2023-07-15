<template>
  <div class="text-center">
    <div class="text-6xl font-bold">{{ countryName }}</div>
    <div v-if="dataDate" class="text-2xl mt-4 mb-10">
      <p class="text-md font-bold">latest update:</p>
      <p>{{ timestamp }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import moment from "moment";

const props = defineProps({
  countryName: {
    type: String,
    default: "",
  },
  dataDate: {
    type: String,
    default: "",
  },
});

const timestamp = computed(() =>
  moment(props.dataDate).format("MMMM Do YYYY, h:mm:ss a")
);
</script>
