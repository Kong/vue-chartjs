import { mount } from '@vue/test-utils'
import LegacyPie from './examples/Pie.vue'

describe('LegacyPie', () => {
  const Component = {
    template: '<div><LegacyPie :chartId="chartId" :plugins="plugins" /></div>',
    components: { LegacyPie },
    props: ['chartId', 'plugins']
  }

  it('should render a canvas', () => {
    const wrapper = mount(Component)

    const pieChartEl = wrapper.find('#pie-chart')
    expect(pieChartEl.element.id).not.toBe('undefined')
    expect(pieChartEl.exists()).toBe(true)

    const canvasEl = wrapper.find('canvas')
    expect(canvasEl.exists()).toBe(true)
  })

  it('should change id based on prop', () => {
    const wrapper = mount(Component, {
      propsData: { chartId: 'piechartprop' }
    })

    const pieChartEl = wrapper.find('#piechartprop')
    expect(pieChartEl.element.id).not.toBe('undefined')
    expect(pieChartEl.exists()).toBe(true)
  })

  it('should add inline plugins based on prop', () => {
    const testPlugin = {
      id: 'test'
    }

    const wrapper = mount(Component, {
      propsData: { plugins: [testPlugin] }
    })

    expect(wrapper.props().plugins.length).toEqual(1)
  })
})
