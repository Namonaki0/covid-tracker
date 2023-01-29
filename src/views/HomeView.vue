<template>
    <main v-if="!loadingState" class="pb-4">
        <DataTitle :text="title" :data-date="date"/>
        <DataBoxes :stats="stats" />
        <CountrySelect :countries="countries" @get-country="getCountryData"/>
        <button
            v-if="stats.Country"
            @click="clearCountryData"
            class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
        >Clear Country</button>
    </main>

    <main 
        v-else 
        class="flex flex-col align-center justify-center text-center"
    >
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            fetching data...
        </div>
        <img :src="loadingImage" class="w-24 m-auto" alt="">
    </main>
</template>

<script setup>

import { onMounted, ref } from "vue";

import DataTitle from "@/components/DataTitle"
import DataBoxes from "@/components/DataBoxes"
import CountrySelect from "@/components/CountrySelect.vue"

const props = defineProps({
    loading: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: 'Global'
    }
})

let dataObj = ref({
    date: '',
    stats: {},
    countries: [],
    loading: true
})

let title = ref('');
let loadingState = ref(null);
let stats = ref({})
let date = ref('')
let countries = ref([])

const fetchCovidData = onMounted(async() => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();

    dataObj.value = {
        date: data.Date,
        stats: data.Global,
        countries: data.Countries,
        loading: false
    }

    title.value = "Global"
    loadingState.value = dataObj.value.loading
    stats.value = dataObj.value.stats
    date.value = dataObj.value.date
    countries.value = dataObj.value.countries

})

function getCountryData(country) {
    stats.value = country
    title.value = country.Country
}

async function clearCountryData() {
    const data = await fetchCovidData();
    return data;
}

</script>
