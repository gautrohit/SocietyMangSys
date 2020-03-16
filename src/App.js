import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Socitey Mang System
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Registration'}>
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Registration" component={Registration}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
