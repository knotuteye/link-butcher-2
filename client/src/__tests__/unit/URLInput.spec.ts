import { mount } from '@vue/test-utils'
import URLInput from '../../components/URLInput.vue'

describe('RecentLink.vue', () => {
  test('renders as designed', () => {
    const wrapper = mount(URLInput)
    expect(wrapper.element).toMatchSnapshot()
  })
})
