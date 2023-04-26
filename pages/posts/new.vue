<template>
  <Transition>
    <div>
      <Alert title="Error" :message="alertMessage" />
      <h1 class="font-bold text-2xl">Create New Post</h1>
      <form @submit.prevent="createPost" class="flex flex-col gap-4">
        <label for="title" class="font-bold">Title</label>
        <input type="text" name="title" class="rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500" v-model="title" />
        <label for="" class="font-bold">Description</label>
        <textarea name="description" id="" cols="30" rows="10" class="rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500" v-model="description"></textarea>
        <label for="tag" class="font-bold">Tag</label>
        <input type="text" name="title" class="rounded bg-gray-100 p-2 outline-none focus:border border-fuchsia-500" v-model="tag" />
        <pre>{{ showTag }}</pre>
        <button type="submit" class="p-2 rounded bg-green-500 hover:bg-green-700 text-white">Create</button>
      </form>
    </div>
  </Transition>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const supabase = useSupabaseClient()
const router = useRouter()

const alertMessage = ref('')

const title = ref('')
const description = ref('')
const tag = ref('')

const userStore = useUserStore()

const showTag = computed(() => tag.value.trim().split(','))
const createPost = async () => {
  try {
    if (!title.value || !description.value) {
      alertMessage.value('Title and Description are required')
      throw new Error('Title and Description are required')
    }

    const { data, error } = await supabase.from('posts').insert({
      title: title.value,
      body: description.value,
      username: userStore.user.email,
      tag: showTag.value
    })
    if (data) {
      console.log(data)
    }
    if (error) {
      alertMessage.value(error)
      console.error(error)
    }
    router.push('/posts')
  } catch (error) {
    console.log(error)
  }
}
</script>
