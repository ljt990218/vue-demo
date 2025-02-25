<script setup lang="ts">
import { ref } from 'vue'
import { getUserInfo, logout } from '@/api/index'
import { closeToast, showLoadingToast, showToast } from 'vant'
import router from '@/router'

interface UserInfo {
  // 根据实际返回数据定义类型
  [key: string]: any
}

interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

const userInfo = ref<UserInfo>({})

async function fetchUserInfo() {
  try {
    showLoadingToast({ forbidClick: true })
    const res = await getUserInfo() as ApiResponse<UserInfo>
    
    if (res.code === 200) {
      userInfo.value = res.data
    } else {
      showToast(res.message)
    }
  } catch (error) {
    showToast('获取用户信息失败')
  } finally {
    closeToast()
  }
}

async function handleLogout() {
  try {
    showLoadingToast({ forbidClick: true })
    const res = await logout() as ApiResponse<null>
    
    if (res.code === 200) {
      userInfo.value = {}
      router.push('/login')
    } else {
      showToast(res.message)
    }
  } catch (error) {
    showToast('退出登录失败')
  } finally {
    closeToast()
  }
}

fetchUserInfo()
</script>

<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<style lang="less" scoped>
.home {
  margin: 100px auto;
  
  h1 {
    color: #000;
    text-align: center;
    margin-bottom: 24px;
  }
}
</style>
