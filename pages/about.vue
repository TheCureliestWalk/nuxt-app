<template>
  <Transition>
    <div>
      {{ $pxczxc }}
      {{ userProfile }}
      <button @click="userStore.logout" class="block my-2 p-2 bg-emerald-500 text-white hover:bg-emerald-700 rounded">🛑 Logout</button>
      <UploadButton />
      <h1 class="font-bold text-2xl">About</h1>
      <pre class="p-2 bg-indigo-100">authClient: {{ authClient }}</pre>
      <pre class="p-2 bg-pink-100">Token: {{ token }}</pre>
      <pre class="p-2 bg-amber-100">User: {{ user }}</pre>
    </div>
  </Transition>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const user = useSupabaseUser()
const token = useSupabaseToken()
const authClient = 'Just supabase user auth client.'
const userProfile = getUserProfile()
</script>
