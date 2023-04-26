import { useAlertStore } from '~/stores/alert'

export default defineNuxtRouteMiddleware((to) => {
  const userLogin = useSupabaseUser() // it have ref
  const alertStore = useAlertStore()

  if (userLogin.value === null && to.name !== 'login') {
    alertStore.message = 'You must be logged in to view this page'
    return navigateTo('/login')
  }
  //return navigateTo('/')
})
