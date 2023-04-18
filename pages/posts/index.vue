<template>
  <Transition>
    <div>
      <h1 class="text-lg font-bold tracking-wide">All posts</h1>
      <!-- Action -->
      <div class="my-4">
        <a href="posts/new" class="rounded p-2 bg-sky-500 hover:bg-sky-700 text-white text-sm tracking-wide">✏️ New Post</a>
      </div>

      <p class="text-xs">Posts: {{ data.length }}</p>
      <p v-if="pending">Loading...</p>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 overflow-hidden text-gray-700">
        <div v-for="x in data" :key="x.id" class="flex flex-col w-full max-w-md bg-slate-50 p-6 border-l-2 border-cyan-300">
          <div>
            <NuxtLink :href="'posts/' + x.id" class="font-bold text-base cursor-pointer hover:text-emerald-500">{{ x.title }}</NuxtLink>
          </div>
          <!-- Action Bar -->
          <div class="my-4 flex justify-between space-x-3 text-sm border-t-2 pt-2 px-2">
            <div class="border-l-2 pl-2 border-indigo-500">
              <span v-for="tag in x.tag" :key="tag" class="inline-flex pr-2 cursor-pointer hover:text-sky-500 decoration-slate-500">{{ tag }}</span>
            </div>
            <div class="hover:text-indigo-500 cursor-pointer">Like: {{ x.like }}</div>
          </div>
          <div class="">
            <NuxtLink :href="'posts/' + x.id" class="flex flex-row-reverse text-sm underline underline-offset-4 decoration-emerald-500 hover:text-indigo-500">+ Read</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { usePostStore } from '~/stores/post'
const postStore = usePostStore()

const { data } = await useAsyncData('posts', () => {
  return postStore.getAllPost()
})
</script>
