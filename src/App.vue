<script setup>
import Header from "@/components/Header.vue";
import CountrySelect from "@/components/CountrySelect.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <Header />
  <div class="container">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>
