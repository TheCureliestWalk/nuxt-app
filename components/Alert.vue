<template>
  <Transition>
    <div v-if="show" class="flex items-center justify-between rounded-xl my-4 p-2 px-4 shadow-md w-full bg-amber-500 text-white">
      <h1 class="text-md font-bold">{{ props.text ?? 'No context' }}</h1>
      <button @click="$emit('close', show = false)" class="rounded-full p-2.5 -m-1.5 hover:bg-white/30">X</button>
    </div>
  </Transition>
</template>

<script setup>
const show = ref(true)
const props = defineProps({
  text: {
    type: String,
    required: false
  }
})

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 3000)
})

defineEmits(['close'])
</script>
