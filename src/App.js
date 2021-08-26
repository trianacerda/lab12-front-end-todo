import React,  { Component } from 'react';
import { BrowserRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import ToDos from './ToDos.js';

class Home extends Component {
  render() { 
    return <h1>Home</h1>;
  }
}
 
class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN')
  };
  setToken = (tokenValue) => {
    this.setState({ token: tokenValue});
  };
  render(){
    return (
    <BrowserRouter>
      <header className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
          <NavLink to='/signin'>
            Sign In
          </NavLink>
            {/* <div id='token'> 
              APP TOKEN: {this.state.token && this.state.token.toString()}
            </div> */}
      </header>
      <section className='main-page'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route 
              path='/signin'
              render={(routerProps) => (
                  <Auth
                      setToken={this.setToken}
                      type='signin'
                      {...routerProps}
                  />
            )}
          />
          <Route
              path="/signup"
              render={(routerProps) => (
                  <Auth
                      setToken={this.setToken}
                      type="signup"
                      {...routerProps}
                  />
            )}
          />
          <Route
              path='/todos'
              render={(routerProps) =>
                  this.state.token ? (
                      <ToDos token={this.state.token} {...routerProps} />
                  ) : (
                      <Redirect to='/signin' />
                  )
              }
          />
        </Switch>
      </section>
    </BrowserRouter>
    );
  }
}

export default App;