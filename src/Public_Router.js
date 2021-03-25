import React from "react";
import { Redirect, Route } from "react-router-dom";

const Public_Router = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) => 
      localStorage.getItem("login") ? <Cmp {...props} /> : <Redirect to="/" />
    }
  />
)

export default Public_Router;
