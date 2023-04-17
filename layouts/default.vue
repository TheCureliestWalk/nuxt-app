<template>
  <div class="flex flex-col gap-6 py-8 px-8 md:px-16 lg:px-32 w-full min-h-screen bg-gradient-to-tr from-pink-300 to-sky-300 shadow-md">
    <Alert/>
    <NavBar />
    <div class="p-8 bg-white w-full min-h-screen rounded-xl shadow-md">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Iho's App"
})
</script>
