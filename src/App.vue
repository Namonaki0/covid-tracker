<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="container">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>
