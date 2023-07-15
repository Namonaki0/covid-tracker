<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <header class="text-center bg-slate-600 text-white p-4 mb-10">
    <h1 class="md:text-5xl font-bold mb-3 flex items-center justify-center">
      <Icon
        icon="covid:covid-19-virus-pandemic-1"
        class="speech-mark-left mr-4 header-icon-effect"
        width="60"
        height="60"
      />
      <Transition name="slide-fade">
        <span class="text-5xl">Covid-19 tracker</span>
      </Transition>
    </h1>
    <span
      >API by
      <a class="text-blue-200" href="https://rapidapi.com" target="_blank"
        >rapidapi.com</a
      ></span
    >
  </header>
</template>

<style scoped>
.header-icon-effect {
  animation: iconEffect 5s ease-in-out infinite alternate forwards;
}

@keyframes iconEffect {
  0% {
    color: white;
  }
  100% {
    color: rgb(0, 165, 0);
  }
}
</style>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  opacity: 0;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
