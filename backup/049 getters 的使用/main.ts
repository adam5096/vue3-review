import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia' // pinia 01:引入 pinia

const app = createApp(App) // 創建 Vue 應用實例

const pinia = createPinia() // pinia 02:創建 pinia 實例

app.use(pinia) // pinia 03:使用 pinia

app.mount('#app') // 掛載到 DOM 上