<template>
  <Transition>
    <div>
      <h1 class="font-bold text-lg">POST ID: {{ $route.params.id }}</h1>
      <div class="p-8 mt-4 space-y-3">
        <h2 class="font-bold text-lg">{{ data[0].title }}</h2>
        <p>{{ data[0].body }}</p>
        <div class="block place-content-end justify-items-end items-end">
          <button @click="$router.go(-1)" class="p-2 border-l-2 border-fuchsia-500 hover:text-indigo-500">--Back--</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { usePostStore } from '~/stores/post'
const postStore = usePostStore()
const route = useRoute()
const { data } = await useAsyncData('post', () => {
  return postStore.getPostById(route.params.id)
})
definePageMeta({
  middleware: ['auth']
  // or middleware: 'auth'
})
</script>
