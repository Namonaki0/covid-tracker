<template>
  <div class="text-center">
    <Transition name="slide-fade">
      <div class="text-6xl font-bold">{{ countryName }}</div>
    </Transition>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
