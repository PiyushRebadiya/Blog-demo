import axios from "axios";
import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Redirect } from "react-router-dom";

export const CREATE_BLOG_USERS_REQUEST = "CREATE_BLOG_USERS_REQUEST";
export const CREATE_BLOG_USERS_SUCCESS = "CREATE_BLOG_USERS_SUCCESS";
export const CREATE_BLOG_USERS_FAILURE = "CREATE_BLOG_USERS_FAILURE";

export const createBlogUsersRequest = () => ({
  type: CREATE_BLOG_USERS_REQUEST,
});

export const createBlogUsersSuccess = (users) => ({
  type: CREATE_BLOG_USERS_SUCCESS,
  payload: users,
});

export const createBlogUsersFailure = (error) => ({
  type: CREATE_BLOG_USERS_FAILURE,
  payload: error,
});

export const createBlogUsers = (formdata) => {
  return (dispatch) => {
    dispatch(createBlogUsersRequest);
    axios({
      method: "post",
      url: "http://localhost:3003/data",
      data: formdata,
    })
      .then(function (response) {
        const users = response.data;
        if (users) {
          toast.success("New Blog Done!!!");
        }
        setTimeout(() => {
          dispatch(createBlogUsersSuccess(users));
        }, 1900);
        return users;
      })
      .catch(function (error) {
        dispatch(createBlogUsersFailure("Failed!"));
      });
  };
};
