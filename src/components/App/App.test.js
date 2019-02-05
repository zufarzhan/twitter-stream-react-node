import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import Tweet from '../Tweet/Tweet'

const wrapper = shallow(<App />)

describe('App components tests', () => {
  test('Should render without crashing', () => {
    expect(wrapper.length).toBe(1)
  })

  test('Should render Tweet component after adding to array in State', () => {
    wrapper.setState({ tweets: [{
      id: 1,
      user: {
        profile_image_url: 'url',
        screen_name: 'nickname',
        name: 'name'
      },
      text: 'test text'
    }] })
    expect(wrapper.find(Tweet).length).toBe(1)
  })
})
