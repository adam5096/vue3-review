import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Count from '@/components/Count.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Count.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(Count)
    expect(wrapper.find('.count').exists()).toBe(true)
  })

  it('initial sum is 0', () => {
    const wrapper = mount(Count)
    expect(wrapper.text()).toContain('當前加總為 0')
  })

  it('can increment sum', async () => {
    const wrapper = mount(Count)
    const addButton = wrapper.find('button:first-of-type')
    await addButton.trigger('click')
    expect(wrapper.text()).toContain('當前加總為 1')
  })
})