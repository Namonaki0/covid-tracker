<template>
    <div class="text-center">
        <div class="text-3xl font-bold">{{ text }}</div>
        <div class="text-2xl mt-4 mb-10">
            {{ timestamp }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import moment from 'moment';

    const props = defineProps({
        text: {
            type: String,
            default: ''
        },
        dataDate: {
            type: String,
            default: ''
        }
    })

const timestamp = computed(() => moment(props.dataDate).format('MMMM Do YYYY, h:mm:ss a'));
</script>