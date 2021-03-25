import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Redirect } from "react-router-dom";

export const NEW_USERS_REQUEST = "NEW_USERS_REQUEST";
export const NEW_USERS_SUCCESS = "NEW_USERS_SUCCESS";
export const NEW_USERS_FAILURE = "NEW_USERS_FAILURE";

export const newUsersRequest = () => ({
  type: NEW_USERS_REQUEST,
});

export const newUsersSuccess = (users) => ({
  type: NEW_USERS_SUCCESS,
  payload: users,
});

export const newUsersFailure = (error) => ({
  type: NEW_USERS_FAILURE,
  payload: error,
});

export const newUsers = (blank) => {
  return (dispatch) => {
    dispatch(newUsersRequest);
    axios({
      method: "post",
      url: "http://localhost:3003/posts",
      data: blank,
    })
      .then(function (response) {
        const users = response.data;
        if (users) {
          toast.info("New Account done!!!");
        }
        setTimeout(() => {
          dispatch(newUsersSuccess(users));
        }, 1900);
        return users;
      })
      .catch(function (error) {
        dispatch(newUsersFailure("Failed!"));
      });
  };
};
