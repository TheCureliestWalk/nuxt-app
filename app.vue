<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;500;700&display=swap');

html {
  font-family: 'Noto Sans Thai', sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
