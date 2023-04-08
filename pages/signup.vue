<template>
  <Transition>
    <div class="p-8 space-y-4 justify-center">
      <div>
        <h1 class="font-bold tracking-wide">Register</h1>
      </div>
      <div>
        <form @submit.prevent="userStore.signup(email, password)" class="flex flex-col max-w-sm justify-center">
          <div class="space-y-2">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="rounded-md border-2 border-gray-300 p-2 w-full" v-model="email" />
          </div>
          <div class="space-y-2 mt-2">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="rounded-md border-2 border-gray-300 p-2 w-full" v-model="password" />
          </div>
          <button class="rounded-md bg-indigo-600 text-white p-2 my-2 hover:bg-indigo-800">Sign Up</button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
const email = ref('')
const password = ref('')

const userStore = useUserStore()
</script>
