<template>
  <div class="flex flex-col place-items-center gap-6 py-8 px-8 md:px-16 lg:px-32 w-full min-h-screen bg-gradient-to-tr from-pink-300 to-sky-300 shadow-md">
    <div class="p-8 bg-white w-full max-w-7xl min-h-screen rounded-xl shadow-md">
      <NavBar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Iho's App"
})
</script>
