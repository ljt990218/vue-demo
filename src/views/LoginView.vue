<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, CellGroup, Button } from 'vant'
import { login, getCsrf, getUserInfo } from '@/api/index'
import router from '@/router'
import { closeToast, showLoadingToast, showToast } from 'vant'

// 定义接口
interface LoginData {
  email: string
  password: string
}

interface ApiResponse {
  code: number
  message: string
  data?: any
}

// 响应式状态
const email = ref('test@example.com')
const password = ref('password')
const loading = ref(false)

// 表单验证规则
const rules = {
  email: [
    { required: true, message: '请填写邮箱地址' },
    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式' },
  ],
  password: [{ required: true, message: '请填写密码' }],
}

// 初始化CSRF
const initCsrf = async () => {
  try {
    await getCsrf()
    // getUserInfo()
  } catch (error) {
    showToast('初始化失败，请刷新页面重试')
  }
}

// 登录提交
const onSubmit = async (values: LoginData) => {
  try {
    loading.value = true

    const res = (await login(values)) as ApiResponse
    if (res.code === 200) {
      showToast('登录成功')
      router.push('/')
    } else {
      showToast(res.message || '登录失败')
    }
  } catch (error) {
    showToast('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}

// 初始化
initCsrf()
</script>

<template>
  <div class="login">
    <h1>登录页</h1>
    <Form @submit="onSubmit">
      <CellGroup inset>
        <Field v-model="email" name="email" label="邮箱地址" placeholder="请输入邮箱地址" :rules="rules.email" />
        <Field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="rules.password"
        />
      </CellGroup>
      <div style="margin: 16px">
        <Button round block type="primary" native-type="submit" :loading="loading" loading-text="登录中...">
          登录
        </Button>
      </div>
    </Form>
  </div>
</template>

<style lang="less">
.login {
  margin: 80px auto;
}
h1 {
  color: #000;
  text-align: center;
  margin-bottom: 60px;
}
</style>
