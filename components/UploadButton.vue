<template>
  <input type="file" class="p-2 bg-amber-300 hover:bg-amber-400 text-amber-700 rounded" @change="updateImg" ref="file" />
</template>

<script setup>
const supabase = useSupabaseClient()
const router = useRouter()
const file = ref()

const updateImg = async () => {
  const uploadedFile = file.value.files[0]
  const {data, error} = await supabase.storage.from('user-profile').upload(uploadedFile.name, uploadedFile)
  console.log(uploadedFile)
  if (data) {
    router.push('/')
  }
  if (error) {
    console.log(error)
  }
}
</script>
