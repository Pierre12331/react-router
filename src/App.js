import React, { Component } from 'react';
import './App.css';
import History from './Components/History/index';
import Home from './Components/Home/index';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';


class App extends Component {
  render() {
      return (
          <BrowserRouter>
          <div>
            <NavLink exact to="/home" activeClassName="selected"> Home </NavLink>
            <NavLink to="/history" activeClassName="selected"> History </NavLink>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/history" component={History} />
            </Switch>
            </div>
          </BrowserRouter>
      );
  }
}

export default App;