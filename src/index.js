import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'font-awesome/css/font-awesome.css'

import injectGlobalStyles from 'utils/styles/injectGlobalStyles'
import Theme from 'config/Theme'
import App from 'components/App'
import {BrowserRouter, Route} from 'react-router-dom'

injectTapEventPlugin()
injectGlobalStyles()

ReactDOM.render(
  <MuiThemeProvider>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
