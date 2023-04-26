export const useAlertStore = defineStore('alert', () => {
  const showAlert = ref(false)
  const alertTitle = ref('')
  const alertMessage = ref('')
  const ihoAlert = (title: string, message: string) => {
    showAlert.value = true
    alertTitle.value = title
    alertMessage.value = message
    setTimeout(() => {
      showAlert.value = false
      alertTitle.value = ''
      alertMessage.value = ''
    }, 3000)
  }
  return { showAlert, alertTitle, alertMessage, ihoAlert }
})
