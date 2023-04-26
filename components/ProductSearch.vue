<template>
  <form class="flex max-w-sm">
    <input type="text" class="w-full border-2 border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Search" />
    <button type="submit" class="bg-pink-600 text-white p-2 rounded-r-md">
      <MagnifyingGlassIcon class="w-6 h-6" />
    </button>
  </form>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>
