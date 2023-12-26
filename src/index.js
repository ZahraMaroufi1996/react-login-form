import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { indexRoutes } from "routes";

import { AuthProvider } from "contexts/Auth";

import "assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
