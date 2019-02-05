import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import checkPropTypes from 'check-prop-types'

let props = {
  term: 'test',
  updateSearchTerm: function () {
    console.log('test')
  }
}

const wrapper = shallow(<Header {...props} />)

describe('Header components tests', () => {
  test('Should render without crashing', () => {
    expect(wrapper.length).toBe(1)
  })
  
  test('Does not throw warninig with expected props', () => {
    const propError = checkPropTypes(Header.propTypes, props, 'prop', Header.name)
    expect(propError).toBeUndefined()
  })
})
