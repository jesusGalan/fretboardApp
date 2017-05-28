import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import NavigationBar from 'components/NavigationBar'
import GuitarApp from 'components/GuitarApp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className="container">
          <Route path="/guitar" component={GuitarApp} />
        </div>         
      </div>
    );
  }
}


export default App;
