import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./registration.css";
import { newUsers } from "../../Redux/Action/Registration_Action";

const Registration = (props) => {
  const [blank, setBlank] = useState({
    user: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [userValidate, setUserValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [mobileValidate, setMobileValidate] = useState(false);

  let userValidation = blank.user;
  let emailValidation = blank.email;
  let passwordValidation = blank.password;
  let mobileValidation = blank.mobile;

  const dispatch = useDispatch();

  if (userValidate > 7) {
    setUserValidate(true);
  }

  const signUp = (e) => {
    e.preventDefault();
    if (
      userValidation === "" ||
      emailValidation === "" ||
      passwordValidation === "" ||
      mobileValidation === ""
    ) {
      alert("Enter a value");
    } else if (userValidate === false) {
      dispatch(newUsers(blank));
      props.history.push("/");
    } else {
      alert("Enter a value");
    }
  };

  const UserNameChange = (e) => {
    let item = e.target.value;
    if (item.length > 7) {
      setUserValidate(true);
    } else {
      setUserValidate(false);
      setBlank({ ...blank, user: e.target.value });
    }
  };

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

  const MobileChange = (e) => {
    let item = e.target.value;
    if (item.length > 10) {
      setMobileValidate(true);
    } else {
      setMobileValidate(false);
      setBlank({ ...blank, mobile: e.target.value });
    }
  };

  return (
    <>
      <form>
        <div className="container">
          <h1>Registration Form</h1>
          <h5>Create New Account.</h5>
          <br />
          <input
            type="text"
            name="user"
            placeholder="Enter Username"
            onChange={UserNameChange}
          />
          {userValidate && <p>sort name valid!!!</p>}
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={EmailChange}
          />
          {emailValidate && <p>email not valid!!!</p>}

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={PasswordChange}
          />
          {passwordValidate && <p>password not longer!!!</p>}
          <br />
          <select name="phoneCode" required>
            <option selected hidden value="">
              +91
            </option>
          </select>
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={MobileChange}
          />
          {mobileValidate && <p>mobile only 10 word valid!!!</p>}
          <span>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </span>
          <div className="clearfix">
            <button type="submit" className="btn btn-primary" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registration;
