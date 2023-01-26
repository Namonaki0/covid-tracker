<template>
    <main v-if="!loadingState">
        <DataTitle :text="title" :data-date="date"/>
        <DataBoxes :stats="stats" />
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
import DataBoxes from "@/components/DataBoxes";

const props = defineProps({
    loading: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: 'Global'
    },
    loadingImage: require('../assets/hourglass.gif')
})

let dataObj = ref({
    date: '',
    stats: {},
    countries: [],
    loading: true
})

let loadingState = ref(null);
let stats = ref({})
let date = ref('')

onMounted(async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();

    dataObj.value = {
        date: data.Date,
        stats: data.Global,
        countries: data.Countries,
        loading: false
    }

    loadingState.value = dataObj.value.loading
    stats.value = dataObj.value.stats
    date.value = dataObj.value.date
})

</script>
