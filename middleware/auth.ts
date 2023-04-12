export default defineNuxtRouteMiddleware((to) => {
  const userLogin = useSupabaseUser() // it have ref
  if (userLogin.value === null && to.name !== 'login') {
    return navigateTo('/login')
  }
  //return navigateTo('/')
})
