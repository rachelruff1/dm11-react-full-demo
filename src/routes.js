import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from './components/Header/Header';

export default (
  <Switch>
    <Route exact path="/" render={()=>(
        <div>
            <Header />
            <Home />
            </div>
    )} />
    <Route path="/login" component={Login} />
    <Route
      path="*"
      render={() => (
        <div>
          <p>Not Found</p>
        </div>
      )}
    />
  </Switch>
);
