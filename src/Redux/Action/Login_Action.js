import axios from "axios";
import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Redirect } from "react-router-dom";

export const LOGIN_USERS_REQUEST = "LOGIN_USERS_REQUEST";
export const LOGIN_USERS_SUCCESS = "LOGIN_USERS_SUCCESS";
export const LOGIN_USERS_FAILURE = "LOGIN_USERS_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const loginUsersRequest = () => ({
  type: LOGIN_USERS_REQUEST,
});

export const loginUsersSuccess = (users) => ({
  type: LOGIN_USERS_SUCCESS,
  payload: users,
});

export const loginUsersFailure = (error) => ({
  type: LOGIN_USERS_FAILURE,
  payload: error,
});

export const logOut = (error) => ({
  type: LOG_OUT,
});

export const loginUsers = (data) => {
  return async (dispatch) => {
    dispatch(loginUsersRequest);
    await axios
      .get("http://localhost:3003/posts")
      .then((res) => {
        const users = res.data.find(values => values.email === data.email && values.password === data.password);
        if(users===undefined){
          throw(res.error)
      }
      toast.success("Login successful!");
      setTimeout(() => {
        localStorage.setItem('login',JSON.stringify(true))
        localStorage.setItem('user',JSON.stringify(users))
        localStorage.setItem('token',(users.id))
        dispatch(loginUsersSuccess(users));
      }, 1500);
      return res.data;
      })
      .catch((error) => {
        dispatch(loginUsersFailure("UserName or Password"));
      });
  };
};
