<template>
  <Transition>
    <div>
      <h1 class="font-bold text-2xl">Create New Post</h1>
      <form @submit.prevent="createPost" class="flex flex-col gap-4">
        <label for="title" class="font-bold">Title</label>
        <input type="text" name="title" class="rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500" v-model="title" />
        <label for="" class="font-bold">Description</label>
        <textarea name="description" id="" cols="30" rows="10" class="rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500" v-model="description"></textarea>
        <button type="submit" class="p-2 rounded bg-green-500 hover:bg-green-700 text-white">Create</button>
      </form>
    </div>
  </Transition>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
import { usePostStore } from '~/stores/post'

const title = ref('')
const description = ref('')

const postStore = usePostStore()
const userStore = useUserStore()

const createPost = () => {
  postStore.createPost({
    title: title.value,
    body: description.value,
    username: userStore.user.email
  })
}

onMounted(() => {
  userStore.refreshSession()
})
</script>
