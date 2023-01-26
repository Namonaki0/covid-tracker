<template>
    {{ stats }}
</template>

<script setup>

const props = defineProps({
    stats: {
        type: Object,
        default: () => {}
    }
})

</script>
