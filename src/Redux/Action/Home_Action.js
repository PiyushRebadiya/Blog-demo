import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Redirect } from "react-router-dom";

export const HOME_USERS_REQUEST = "HOME_USERS_REQUEST";
export const HOME_USERS_SUCCESS = "HOME_USERS_SUCCESS";
export const HOME_USERS_FAILURE = "HOME_USERS_FAILURE";
export const DELETE_USERS = "DELETE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

export const homeUsersRequest = () => ({
  type: HOME_USERS_REQUEST,
});

export const homeUsersSuccess = (users) => ({
  type: HOME_USERS_SUCCESS,
  payload: users,
});

export const homeUsersFailure = (error) => ({
  type: HOME_USERS_FAILURE,
  payload: error,
});

export const deleteUsers = (id) => ({
  type: DELETE_USERS,
  payload: id,
});

export const updateUsers = (id) => ({
  type: UPDATE_USERS,
  payload: id,
});

export const homeUsers = () => {
  return async (dispatch) => {
    dispatch(homeUsersRequest);
    await axios
      .get("http://localhost:3003/data")
      .then((res) => {
        // console.log("res", res);
        let users = res.data;
        dispatch(homeUsersSuccess(users));
        return res.data;
      })
      .catch((error) => {
        dispatch(homeUsersFailure("UserName or Password"));
      });
  };
};

export const deleteBlog = (id) => {
  return async (dispatch) => {
    fetch("http://localhost:3003/data/" + id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        dispatch(deleteUsers(id));
        return homeUsers();
      });
    });
  };
};

export const updateBlog = (id) => {
  return (dispatch) => {
    fetch("http://localhost:3003/data/" + id).then((response) => {
      response.json().then((result) => {
        dispatch(updateUsers(result));
      });
    });
  };
};

