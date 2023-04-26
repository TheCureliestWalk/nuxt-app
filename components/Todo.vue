<template>
  <h1 class="font-bold text-2xl tracking-wider">Todo</h1>
  <div class="flex flex-col gap-6 p-8 border rounded max-w-sm">
    <div>
      <input type="text" class="w-full p-2 border rounded-sm" placeholder="+ Add to do" v-model="task" v-on:keydown.enter="addTodo" />
    </div>
    <ul class="pl-4 flex flex-col gap-2">
      <label v-for="x in data" :for="x.id" class="space-x-2" v-on:click="toggleComplete">
        <input type="checkbox" :id="x.id" />
        <span class="cursor-pointer" :class="{ done: x.complete }">{{ x.task }}</span>
      </label>
    </ul>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const task = ref('')

const { data, error } = await supabase.from('todos').select('*').order('id', { ascending: false })

if (error) {
  console.log(error)
}

declare interface Todo {
    task: string
    complete: boolean
}
const addTodo = async () => {
  try {
    const { data, error } = await supabase.from('todos').insert({
      task: task.value,
      complete: false
    })
    if (data) {
      console.log(data)
    }
    if (error) {
      console.error(error)
    }
  } catch (error) {
    console.log(error)
  }
  finally {
    task.value = ''
  }
}

const toggleComplete = async (todo: Todo) => {
  try {
    const { data, error } = await supabase.from('todos').update({ complete: !todo.complete }).eq('task', todo.task)
    if (data) {
      console.log(data)
    }
    if (error) {
      console.error(error)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
