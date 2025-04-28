// ******** 路由配置 ********

// 第 1 步：引入路由
import { createRouter, createWebHistory } from 'vue-router'

// 第 2 步：引入路由元件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'


// 第 3 步：創建路由實例
// history: createWebHistory(), 指定路由器工作模式
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'juyeah',
            path: '/home',
            component: Home
        },
        {
            name: 'guangyu',
            path: '/about',
            component: About
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    path: 'detail',
                    component: Detail
                }
            ]
        },
    ]
})

// 第 4 步：導出路由器，使他能參與整個專案程式運行
export default router