<script setup>
import { onMounted, onUpdated, ref } from "vue";
import { Icon } from "@iconify/vue";

import axios from "axios";

import DataTitle from "@/components/DataTitle";
import DataBoxes from "@/components/DataBoxes";
import CountrySelect from "@/components/CountrySelect";

let title = ref("");
let countries = ref([]);
let totalData = ref();
let date = ref();
let stats = ref();
let loadingState = ref(null);
let loadingMessage = ref("");

let initialState = ref({
  method: "GET",
  url: "",
  params: {},
  headers: {
    "X-RapidAPI-Key": process.env.VUE_APP_API_KEY,
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
});

onMounted(() => {
  loadingState.value = true;
  loadingMessage.value = "fetching country list...";

  handleCountryList();
});

async function handleCountryList() {
  initialState.value.url = "https://covid-19-statistics.p.rapidapi.com/reports";
  initialState.value.params.date = date.value;
  try {
    const response = await axios.request(initialState.value);
    const { data } = response.data;

    loadingState.value = false;

    countries.value = data.map((d) => d.region.name).sort();
    totalData.value = data.map((d) => d);

    handleGlobalStats();
  } catch (error) {
    console.error(error);
  }
}

async function handleGlobalStats() {
  loadingState.value = true;
  loadingMessage.value = "fetching global data...";
  initialState.value.url =
    "https://covid-19-statistics.p.rapidapi.com/reports/total";

  try {
    const response = await axios.request(initialState.value);
    const { data } = response.data;

    loadingState.value = false;

    stats.value = data;
    date.value = data.last_update;
    title.value = "Global Stats";

    loadingState.value = false;
  } catch (error) {
    console.error(error);
  }
}

async function getCountryData(country, indexVal) {
  if (country.selectedCountry === "no-country") {
    title.value = "";
    date.value = null;
    stats.value = [];
  } else {
    loadingState.value = false;
    title.value = Object.values(country).toString();
    date.value = totalData.value[indexVal.index].date;
    stats.value = totalData.value[indexVal.index];
  }
}
</script>

<template>
  <main v-if="!loadingState" class="pb-4">
    <DataTitle :countryName="title" :dataDate="date" />
    <Transition name="slide-fade">
      <DataBoxes :stats="stats" />
    </Transition>

    <CountrySelect :countries="countries" @get-country="getCountryData" />
    <button
      @click="handleGlobalStats"
      class="bg-blue-200 p-4 block m-auto text-xl"
    >
      global stats
    </button>
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-center max-w-max m-auto">
      <Icon
        icon="svg-spinners:ring-resize"
        class="speech-mark-left"
        style="color: #545468"
        width="60"
        height="60"
      />
    </div>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      {{ loadingMessage }}
    </div>
  </main>
</template>

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
