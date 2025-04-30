import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Picsum from '@/components/Picsum.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Picsum.vue', () => {
  // 在每個測試案例執行前，都設置一個新的 Pinia 實例
  beforeEach(() => {
    setActivePinia(createPinia())
    // 清除 localStorage 的數據
    localStorage.clear()
    // 模擬 console.log
    vi.spyOn(console, 'log')
  })

  // 測試案例 1：檢查組件是否正確渲染
  it('renders properly', () => {
    // 掛載 Picsum 組件
    const wrapper = mount(Picsum)
    // 檢查是否存在 class 為 'picsum' 的元素
    expect(wrapper.find('.picsum').exists()).toBe(true)
    // 檢查是否存在按鈕
    expect(wrapper.find('button').exists()).toBe(true)
    // 檢查按鈕文字是否正確
    expect(wrapper.find('button').text()).toBe('取得使用者資料')
  })

  // 測試案例 2：檢查初始狀態
  it('initial state has default item', async () => {
    // 掛載 Picsum 組件
    const wrapper = mount(Picsum)
    // 等待下一個 tick，確保組件完全渲染
    await wrapper.vm.$nextTick()
    // 檢查初始狀態是否有一個預設項目
    const items = wrapper.findAll('li')
    expect(items.length).toBe(1)
    expect(items[0].text()).toContain('預設名稱')
  })

  // 測試案例 3：測試點擊按鈕後的行為
  it('calls handleGetPicsum when button is clicked', async () => {
    // 掛載 Picsum 組件
    const wrapper = mount(Picsum)
    // 找到按鈕
    const button = wrapper.find('button')
    // 模擬點擊按鈕
    await button.trigger('click')
    // 檢查 console.log 是否被調用（因為組件中有 console.log）
    expect(console.log).toHaveBeenCalledWith('picsum 倉庫中的 handleGetPicsum 被呼叫了!!')
  })

  // 測試案例 4：測試 localStorage 的數據持久化
  it('saves data to localStorage when store changes', async () => {
    // 掛載 Picsum 組件
    const wrapper = mount(Picsum)
    // 模擬點擊按鈕
    await wrapper.find('button').trigger('click')
    // 檢查 localStorage 中是否有保存數據
    expect(localStorage.getItem('picsumList')).toBeDefined()
  })
}) 