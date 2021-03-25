import axios from "axios";
// import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Redirect } from "react-router-dom";

export const COMMENT_BLOG_USERS_REQUEST = "COMMENT_BLOG_USERS_REQUEST";
export const COMMENT_BLOG_USERS_SUCCESS = "COMMENT_BLOG_USERS_SUCCESS";
export const COMMENT_BLOG_USERS_FAILURE = "COMMENT_BLOG_USERS_FAILURE";

export const commentBlogUsersRequest = () => ({
  type: COMMENT_BLOG_USERS_REQUEST,
});

export const commentBlogUsersSuccess = (users) => ({
  type: COMMENT_BLOG_USERS_SUCCESS,
  payload: users,
});

export const commentBlogUsersFailure = (error) => ({
  type: COMMENT_BLOG_USERS_FAILURE,
  payload: error,
});

export function commenteBlogUsers(contact) {
  return dispatch => {
      dispatch(commentBlogUsersRequest())
      axios.post('http://localhost:3003/comment',contact)
          .then(res => {
              var cUser = res.data
              dispatch(commentBlogUsersSuccess(cUser))
              return res.data;
          }).catch(error => {
              dispatch(commentBlogUsersFailure(" comment not success "));
          })
  }
}

export function commenteBlogUsersGet() {
  return dispatch => {
      dispatch(commentBlogUsersRequest())
      axios.get('http://localhost:3003/comment')
          .then(res => {
              var cUser = res.data
              dispatch(commentBlogUsersSuccess(cUser))
          }).catch(error => {
              dispatch(commentBlogUsersFailure(" comment not success "));
          })
  }
}
