<template>
    <select 
        @change="onSelect"
        ref="countryRef"
        :v-model="selected"
        class="form-select mt-10 block w-full border p-3 rounded"
    >
        <option value="0">Select Country</option>
        <option 
            v-for="country in countries" 
            :key="country"
            :value="country.ID"
        >{{ country.Country }}</option>
    </select>

</template>

<script setup>
    import {ref} from 'vue'
    const emit = defineEmits(['onSelect'])

    const countryRef = ref({})

    const props = defineProps({
        selected: 0,
        countries: {
            type: Array,
            default: () => []
        }
    })

    function onSelect() {
        const country = props.countries.find(item => item.ID === countryRef.value.value)
        emit('get-country', country)
    }
</script>