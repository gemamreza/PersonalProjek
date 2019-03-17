import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/navbar';
import Login from './components/login';
import Homepage from './components/homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route path='/' component={Homepage} exact />
          <Route path='/login' component={Login} exact />
        
      </div>
    );
  }
}

export default App;
