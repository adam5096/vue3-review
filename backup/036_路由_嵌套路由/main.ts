import { createApp } from 'vue'
import App from './App.vue'

// 引入路由器
import router from './router'

// 創建 Vue 應用實例
const app = createApp(App)

// 使用路由器
app.use(router)

// 掛載到 DOM 上
app.mount('#app')