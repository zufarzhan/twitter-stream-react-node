import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './components/App/App'

// alert cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'))
