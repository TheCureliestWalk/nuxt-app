export const useUserStore = defineStore('user', () => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  // ref session
  const session = ref()
  const user = ref()
  // login method
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      session.value = data.session
      user.value = data.user
      router.push('/')
    }
  }
  // signup method
  const signup = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      router.push('/')
    }
  }
  // logout method
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
    router.push('/')
  }

  const refreshSession = async () => {
    const { data, error } = await supabase.auth.refreshSession()
    if (data) {
      session.value = data.session
      user.value = data.user
    }
    if (error) {
      console.log(error)
    }
  }
  return { session, user, login, logout, signup, refreshSession }
})
