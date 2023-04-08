<template>
  <Transition>
    <div>
      <div>
        <h1 class="font-bold text-2xl">Settings</h1>
      </div>

      <div class="flex gap-2 items-center">
        <label for="email">Email</label>
        <input type="text" name="email" class="p-2 outline-none border" :value="userStore.user?.email" disabled />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.refreshSession()
})
</script>
