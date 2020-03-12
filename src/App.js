import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import AddButtonForm from './containers/AddButtonForm';
import AdminPage from './pages/AdminPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NewWebsitePage from './pages/NewWebsitePage';
import './App.scss';

function App() {
  return (
    <div className="app-container full-height flex-major">
    {/*Add a navbar/header here*/}
      <Router>
      <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route path="/websites/new" >
            <NewWebsitePage />
          </Route>
          <Route path="/admin/addButton" render={() => <AddButtonForm />}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {<Redirect to="/" />}
      </Switch>
      </Router>
    </div>
  );
}

export default App;