<template>
  <div>
    <h3 class="text-sm my-3">Product Count: {{ productItemCount ?? 0 }}</h3>
    <button @click="popItem" class="p-2 rounded bg-violet-300 hover:bg-violet-500 text-violet-700 my-2">x - Pop Item</button>
    <div class="space-x-3">
      <label for="category" class="text-sm font-bold">Filter by Category</label>
      <select name="category" id="category" class="p-1 rounded border-b-2 border-indigo-500 my-2 focus:bg-gray-100 focus:outline-indigo-500" v-model="selectedCategory" @input="updateFilter">
        <option value="">Select All</option>
        <option v-for="x in category" :value="x">{{ x }}</option>
      </select>
    </div>
    <div class="columns-1 sm:columns-3 lg:columns-4 gap-4 space-y-4">
      <div v-for="x in filteredProduct" class="shadow w-full max-w-sm bg-gray-100 rounded text-gray-800">
        <img :src="x.thumbnail" alt="product image" class="w-full h-64 object-cover" />
        <div class="py-3 px-2 bg-slate-300 text-slate-700 flex justify-end mb-3 text-lg font-bold">
          <span>{{ x.title }}</span>
        </div>
        <div class="p-4">
          <div class="flex justify-between items-center">
            <span class="font-bold">${{ x.price }}</span>
            <button @click="openModal" class="rounded p-2 text-white bg-amber-500 hover:bg-amber-700 text-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect, computed } from 'vue'
import type { Product } from '@/types/productType'
import axios from 'axios'

const props = defineProps({
  filter: {
    type: String,
    required: true
  }
})
const selectedCategory = ref<string>('')
const filteredProduct = ref<Product[]>([])
const productItems = ref<Product[]>([])

const category = ref<string[]>(['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'])

const popItem = () => {
  return productItems.value.pop()
}

const buyItem = () => {}

const openModal = () => {}
const getData = () => {
  axios
    .get('https://dummyjson.com/products')
    .then((response) => {
      productItems.value = response.data.products
    })
    .catch((error) => {
      console.log(error)
    })
}

const updateFilter = () => {
  console.log('filter changed')
}

const filterProduct = () => {
  if (selectedCategory.value) {
    const pItem = Array.from(productItems.value)

    filteredProduct.value = pItem.filter((product) => {
      return product.category === selectedCategory.value
    })
  } else {
    filteredProduct.value = productItems.value
  }

  console.log(filteredProduct.value)
}

const productItemCount = computed(() => {
  return filteredProduct.value.length
})

onMounted(() => {
  getData()
})

watchEffect(() => filterProduct())
</script>
