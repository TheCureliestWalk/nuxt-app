<template>
  <div>
    <nav class="w-full bg-white p-3.5 rounded-xl text-gray-700 flex">
      <div class="pl-4 grow">
        <a href="/" class="font-bold tracking-wide">Iho's App</a>
      </div>
      <div class="pr-4">
        <ul class="flex gap-4">
          <li v-for="x in menus">
            <NuxtLink :to="x.href" class="text-gray-800 hover:underline underline-offset-4 decoration-2 decoration-slate-700 duration-150 delay-75">{{ x.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menus = ref([
  {
    href: '/',
    name: 'Home',
    requireAuth: false
  },
  {
    href: '/posts',
    name: 'Posts',
    requireAuth: true
  },
  {
    href: '/about',
    name: 'About',
    requireAuth: false
  },
  {
    href: '/login',
    name: 'Login',
    requireAuth: false
  },
  {
    href: '/signup',
    name: 'Signup',
    requireAuth: false
  },
  {
    href: '/settings',
    name: 'Settings',
    requireAuth: true
  }
])


</script>
