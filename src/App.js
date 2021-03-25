import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Public_Router from "./Public_Router";
import BlogHome from "./Component/Blog/BlogHome";
import SearchBlog from "./Component/SearchBlog/SearchBlog";
import UpdateBlog from "./Component/UpdateBlog/UpdateBlog";
import ListBlog from "./Component/ListBlog/ListBlog";
import LogOut from "./Component/LogOut/LogOut";
import Registration from "./Component/Register/Registration";
import Comment from "./Component/Comment/Comment";
import Navbar from './Layout/Navbar/Navbar'
import LoginPage from './Component/Login/LoginPage'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Public_Router exact path="/home" component={BlogHome} />
          <Public_Router exact path="/search" component={SearchBlog} />
          <Public_Router exact path="/list" component={ListBlog} />
          <Route exact path="/update/:id" component={UpdateBlog} />
          <Route exact path="/clear" component={LogOut} />
          <Route exact path="/new" component={Registration} />
          <Route exact path="/comment" component={Comment} />
          <Route
            exact
            path="*"
            render={(props) => <LoginPage {...props} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
