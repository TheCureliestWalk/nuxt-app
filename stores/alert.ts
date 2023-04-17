export const useAlertStore = defineStore('alert', () => {
    const message = ref()

    return { message }
})