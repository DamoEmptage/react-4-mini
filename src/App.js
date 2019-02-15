import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter, BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css';

import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/route3';
import NotFound from './components/NotFound';
import Login from './components/Login';




class App extends Component {
  render() {

    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to='/1'>Home</Link>
              <Link to='/2'>Profile</Link>
              <Link to='/3'>Logout</Link>


            </nav>
            <img src={logo} className="App-logo" alt="logo" />

            <Switch>
              <Route path='/Login' component={Route1} />
              <Route path='/2' component={Route2} />
              <Route path='/3' component={Route3} />
              <Route patch='/Login' component={Login} />
              <Route path='/NotFound' component={NotFound} />

              <Redirect to='/NotFound' />

              <Route1 />
              <Route2 />
              <Route3 />
            </Switch>

          </header>
        </div>
      </HashRouter>
    );
  }
}

export default App;
