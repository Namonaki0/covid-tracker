<template>
    <main v-if="!loading">
        {{ dataObj.countries }}
    </main>

    <main class="flex flex-col align-center justify-center text-center" v-else>
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            fetching data...
        </div>
        <img :src="loadingImage" class="w-24 m-auto" alt="">
    </main>
</template>

<script setup>

import { onMounted, ref } from "vue";

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

const dataObj = ref({
    date: '',
    stats: {},
    countries: [],
    loading: true
})

onMounted(async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();
    console.log(data)

    const dataObj = {
        date: data.Date,
        stats: data.Global,
        countries: data.Countries,
        loading: false
    }
})

</script>
