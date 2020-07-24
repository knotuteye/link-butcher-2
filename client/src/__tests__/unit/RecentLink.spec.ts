import { mount } from '@vue/test-utils'
import RecentLink from '../../components/RecentLink.vue'

const props = {
  short: 'YWZmOGFi',
  original: 'http://google.com',
  bubble: false
}

describe('RecentLink.vue', () => {
  test('renders props when passed', () => {
    const wrapper = mount(RecentLink, {
      propsData: props
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders bubble when bubble is true', () => {
    const wrapper = mount(RecentLink, {
      propsData: { ...props, bubble: true }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
