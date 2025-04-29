// ******** 路由配置 ********
// 一般元件: 顯式書寫元件標籤而渲染的元件
// 路由元件: 經過 router-link、router-view 導航到指定路由後，渲染出來的原件


// 第 1 步：引入路由
import { createRouter, createWebHistory } from 'vue-router'

// 第 2 步：引入路由元件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'


// 第 3 步：創建路由實例
// history: createWebHistory(), 指定路由器工作模式
// 路由規則中的 props
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
                    name: 'seemore',
                    path: 'detail',
                    component: Detail,
                    // 第一種寫法: params: 將路由收到的所有 params 參數作為 props 傳遞給子元件(路由元件)
                    // props: true

                    // 第二種寫法: query: 自主決定要傳遞參數給子元件(路由元件)，寫成一函數，有返回值
                    props(route) { return route.query }

                    // 第三種寫法(最少用): 物件寫法
                    // props: { a: 100, b: 200 ,c:400}
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

// 第 4 步：導出路由器，使他能參與整個專案程式運行
export default router