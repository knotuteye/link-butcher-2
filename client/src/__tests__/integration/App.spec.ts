import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import store from '../../store'

describe('App.vue', () => {
  test('is integrated as designed', () => {
    const wrapper = mount(App, { store: store })
    expect(wrapper.element).toMatchSnapshot()
  })
})
