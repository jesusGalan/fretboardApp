import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

import Mastboard from 'components/Mastboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Link to="/guitar">guitar app</Link>
          <Route path="/guitar" component={Mastboard} />
          
        </div>         
      </div>
    );
  }
}


export default App;
