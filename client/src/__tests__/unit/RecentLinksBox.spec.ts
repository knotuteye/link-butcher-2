import { shallowMount } from '@vue/test-utils'
import RecentLinksBox from '../../components/RecentLinksBox.vue'

describe('ColorOverlay.vue', () => {
  test('is rendered', () => {
    const wrapper = shallowMount(RecentLinksBox)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders text', () => {
    const wrapper = shallowMount(RecentLinksBox)
    expect(wrapper.text()).toMatch('Recent Links')
  })
})
