<template>
  <Transition>
    <div>
      <div>
        <h1 class="font-bold text-2xl">Settings</h1>
      </div>
      <!-- ALert -->
      <div v-if="alertStore.showAlert" class="my-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">{{ alertStore.alertTitle }}</strong>
        <span class="block sm:inline pl-2">{{ alertStore.alertMessage }}</span>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <label for="email">ID</label>
        <input type="text" name="email" class="p-2 outline-none border" :value="userStore.user?.id" disabled />
        <label for="email">Name</label>
        <input type="text" name="email" class="p-2 outline-none border" v-model="userName" />
        <label for="email">Email</label>
        <input type="text" name="email" class="p-2 outline-none border" :value="userStore.user?.email" disabled />
      </div>
      <button @click="updateHandler" class="place-self-center rounded p-2 bg-amber-300 hover:bg-amber-500 text-gray-700 hover:text-white">Update Profile</button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAlertStore } from '~/stores/alert'
import { useUserStore } from '~/stores/user'
import { Database } from '~/types/supabase'
const user = useSupabaseUser()
const userStore = useUserStore()
const supabase = useSupabaseClient<Database>()
const userName = ref<any>('')

const alertStore = useAlertStore()

const updateHandler = async () => {
  try {
    const { data, error } = await supabase.from('profiles').update({ full_name: userName.value }).eq('id', user.value?.id)
    if (data) {
      console.log(data)
    }
    alertStore.ihoAlert('Success', 'Your profile information has been updated')
  } catch (error) {
    console.error(error)
  }
}
const getUserInfo = async () => {
  try {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', user.value?.id)
    if (error) console.error(error)
    if (data) console.log('getUserInfo', data)
    userName.value = data[0].full_name
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

onMounted(() => {
  userStore.refreshSession()
  getUserInfo()
})

definePageMeta({
  middleware: ['auth']
})
</script>
