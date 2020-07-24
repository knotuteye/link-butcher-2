import { shallowMount } from '@vue/test-utils'
import Branding from '../../components/Branding.vue'

describe('Branding.vue', () => {
  test('renders props.name when passed', () => {
    const name = 'pbid.io'
    const wrapper = shallowMount(Branding, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })

  test('renders as designed', () => {
    const name = 'pbid.io'
    const wrapper = shallowMount(Branding, {
      propsData: { name }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
