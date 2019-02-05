import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'
import Tweet from './Tweet'

let props = {
  tweet: {
    id: 1,
    user: {
      profile_image_url: 'url',
      screen_name: 'nickname',
      name: 'name'
    },
    text: 'test text'
  }
}

const wrapper = shallow(<Tweet {...props} />)

describe('Tweet components tests', () => {
  test('Should render without crashing', () => {
    expect(wrapper.length).toBe(1)
  })
  
  test('Does not throw warninig with expected props', () => {
    const propError = checkPropTypes(Tweet.propTypes, props, 'prop', Tweet.name)
    expect(propError).toBeUndefined()
  })
})
