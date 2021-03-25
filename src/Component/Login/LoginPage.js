import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { loginUsers } from "../../Redux/Action/Login_Action";
import "./login.css";

const Login = (props) => {
  
  const [blank, setBlank] = useState({ email: "", password: "" });
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const dispatch = useDispatch();

  const loginChecked = () => {
    const token = JSON.parse(localStorage.getItem("login"));
    if (token) {
      setLoginStatus(true);
    }
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = blank;
    if (email && password) {
      dispatch(loginUsers(blank));
      setBlank({ email: "", password: "" });
      setTimeout(() => {
        loginChecked();
      }, 2000);
    }
  };

  const createAccount = () => {
    props.history.push("/new");
  };

  if (loginStatus) {
    return <Redirect to="/home" />;
  }

  const EmailChange = (e) => {
    let item = e.target.value;
    let symbol = item.indexOf("@");
    let dot = item.lastIndexOf(".");
    if (symbol < 1) {
      setEmailValidate(true);
    } else if (dot <= symbol + 4) {
      setEmailValidate(true);
    } else if (dot === item.length - 1) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
      setBlank({ ...blank, email: e.target.value });
    }
  };

  const PasswordChange = (e) => {
    let item = e.target.value;
    if (item.length > 6) {
      setPasswordValidate(true);
    } else {
      setPasswordValidate(false);
      setBlank({ ...blank, password: e.target.value });
    }
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?cs=srgb&dl=pexels-burst-374074.jpg&fm=jpg"
              style={{ width: 450, height: 260 }}
              id="icon"
              alt="User Icon"
            />
          </div>{" "}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="user"
              placeholder="Enter a Email"
              onChange={EmailChange}
            />{" "}
            {emailValidate && <p>email not valid!!!</p>}
            <input
              type="text"
              id="password"
              className="fadeIn third pw"
              name="login"
              placeholder="Enter a Password"
              onChange={PasswordChange}
            />{" "}
            {passwordValidate && <p>password not longer!!!</p>}
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={login}
            />{" "}
          </form>{" "}
          <div id="formFooter">
            <input
              type="submit"
              className="fadeIn fourth"
              value="Create Account"
              onClick={createAccount}
            />{" "}
          </div>{" "}
          <ToastContainer autoClose={2000} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
