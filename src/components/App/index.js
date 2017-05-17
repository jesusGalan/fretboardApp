import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Mastboard from 'components/Mastboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route path="/guitar" component={Mastboard} />
        </div>         
      </div>
    );
  }
}


export default App;
