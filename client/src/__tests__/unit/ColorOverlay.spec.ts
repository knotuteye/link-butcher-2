import { shallowMount } from '@vue/test-utils'
import ColorOverlay from '../../components/ColorOverlay.vue'

describe('ColorOverlay.vue', () => {
  test('is rendered as designed', () => {
    const wrapper = shallowMount(ColorOverlay)
    expect(wrapper.element).toMatchSnapshot()
  })
})
