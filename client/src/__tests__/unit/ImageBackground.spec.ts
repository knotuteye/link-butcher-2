import { shallowMount } from '@vue/test-utils'
import ImageBackground from '../../components/ImageBackground.vue'

describe('ImageBackground.vue', () => {
  test('is rendered as designed', () => {
    const wrapper = shallowMount(ImageBackground)
    expect(wrapper.element).toMatchSnapshot()
  })
})
