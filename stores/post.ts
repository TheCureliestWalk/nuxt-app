export interface Post {
  title: string
  body: string
  username: string
}

export const usePostStore = defineStore('post', () => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const createPost = async (post: Post): Promise<void> => {
    const { error } = await supabase.from('posts').insert(post)

    if (error) {
      console.log(error)
    }
    router.push('/')
  }

  return { createPost }
})

export type PostStore = ReturnType<typeof usePostStore>
