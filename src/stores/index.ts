import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', () => {
  const userInfo = ref('')

  const setUserInfo = (val: string) => {
    userInfo.value = val
  }
  const getUserInfo = computed(() => userInfo.value)

  return { userInfo, setUserInfo, getUserInfo }
})
