<script setup>
import { onMounted, ref } from "vue";
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

const options = {
  method: "GET",
  url: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "X-RapidAPI-Key": "45fd083bd6mshcc7adc063f4eb51p1f015bjsn1e4b83bcf140",
    "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
  },
};

onMounted(async () => {
  loadingState.value = true;
  try {
    const response = await axios.request(options);
    const { data } = response.data;
    loadingState.value = false;

    countries.value = data.map((d) => d.region.name);
    totalData.value = data.map((d) => d);
  } catch (error) {
    console.error(error);
  }
});

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
    <DataTitle :text="title" :dataDate="date" />
    <DataBoxes :stats="stats" />

    <CountrySelect :countries="countries" @get-country="getCountryData" />
    <!-- <button
      class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
    >
      Clear Country
    </button> -->
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mt-10 mb-6">fetching data...</div>
    <!-- <img :src="loadingImage" class="w-24 m-auto" alt="" /> -->
  </main>
</template>
