import React from 'react'
import ReactDOM from 'react-dom'

import injectGlobalStyles from 'utils/styles/injectGlobalStyles'
import 'font-awesome/css/font-awesome.css'
import App from 'components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

injectGlobalStyles()

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
)
