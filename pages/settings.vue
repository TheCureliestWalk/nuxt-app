<template>
  <Transition>
    <div>
      <div>
        <h1 class="font-bold text-2xl">Settings</h1>
      </div>

      <div class="flex gap-2 items-center">
        <label for="email">Email</label>
        <input type="text" name="email" class="p-2 outline-none border" :value="userStore.user?.email" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.refreshSession()

  setInterval(() => {
    console.log(new Date().toLocaleString(), document.hasFocus())
  }, 1000)
})

definePageMeta({
  middleware: ['auth']
})
</script>