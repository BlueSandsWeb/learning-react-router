import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import './App.css';

import avengers from './data';

import Home from './components/Home';
import AvengersList from './components/AvengersList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: avengers,
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />  {/* the route is searched for by RegEx.  Router will therefore return whatever is the first match unless you use exact. */}
        <Route exact path="/avengers" component={AvengersList} />

      </div>
    );
  }
}

export default App;
