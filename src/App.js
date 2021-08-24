import { Component } from 'react';
import { BrowserRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './Auth.js';
import ToDos from './ToDos.js';



class Home extends Component {
  render() { 
    return <h1>Home</h1>;
  }
}
 
class App extends Component() {
  state = {
    token: localStorage.getItem('TOKEN')
  };
  setToken = (tokenVal) => {
    this.setState({ token: tokenVal});
  };
  render(){
    return (
      
    <BrowserRouter>
      <header className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
            {/* <div id='token'> 
              APP TOKEN: {this.state.token && this.state.token.toString()}
            </div> */}
      </header>
      <section className='main-page'>
        <Switch>
          <Route exact path='/' Component={Home} />
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
                      <ToDos {...routerProps} />
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
