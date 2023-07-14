<template>
  <div v-if="hasStats" class="grid md:grid-cols-2 gap-4">
    <!-- STATS BOX 1 -->
    <div
      v-if="stats.active || stats.confirmed"
      class="shadow-md bg-blue-100 p-10 text-center rounded"
    >
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">Active:</span>
        {{ numbersWithCommas(stats.active) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Confirmed:</span>
        {{ numbersWithCommas(stats.confirmed) }}
      </div>
    </div>
    <!-- STATS BOX 2 -->
    <div
      v-if="stats.deaths || stats.fatality_rate"
      class="shadow-md bg-blue-200 p-10 text-center rounded"
    >
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ numbersWithCommas(stats.deaths) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Fatality Rate:</span>
        {{ (stats.fatality_rate * 100).toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  stats: {
    type: Object,
    default: () => {},
  },
});

const hasStats = computed(() => props.stats);

function numbersWithCommas(num) {
  if (num !== undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>
