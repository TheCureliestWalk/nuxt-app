export interface Post {
  title: string
  body: string
  username?: string
  tag?: string[]
  like?: number
  create_at?: Date
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

  const getAllPost = async (): Promise<Post[]|null> => {
    const { data, error } = await supabase.from('posts').select('*')

    if (error) {
      console.log(error)
    }

    return data
  }

  const getPostById = async (id: number): Promise<Post[]|null> => {
    const { data, error } = await supabase.from('posts').select('*').eq('id', id)

    if (error) {
      console.log(error)
    }

    return data
  }

  return { createPost, getAllPost, getPostById }
})

export type PostStore = ReturnType<typeof usePostStore>
