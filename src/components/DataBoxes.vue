<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!-- BOX 1 -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Cases
            </h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                    {{ numbersWithCommas(stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                    {{ numbersWithCommas(stats.TotalConfirmed) }}
            </div>
        </div>
        <!-- BOX 2 -->
        <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Deaths
            </h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numbersWithCommas(stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numbersWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    stats: {
        type: Object,
        default: () => {}
    }
})

function numbersWithCommas(num) {
    if(num !== undefined) {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

</script>
