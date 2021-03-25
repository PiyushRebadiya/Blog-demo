import {
    COMMENT_BLOG_USERS_REQUEST,
    COMMENT_BLOG_USERS_SUCCESS,
    COMMENT_BLOG_USERS_FAILURE,
  } from "../Action/Comment_Blog_Action";
  
  let commentLoginApiInitialState = {
    loading: false,
    isLogin: false,
    users: [],
    error: "",
  };
  
  export const commentLoginApiReducer = (state = commentLoginApiInitialState, action) => {
    // console.log("state", state);
    // console.log("action", action);
    switch (action.type) {
      case COMMENT_BLOG_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case COMMENT_BLOG_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: "",
          isLogin: false,
        };
      case COMMENT_BLOG_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
          isLogin: false,
        };
      default:
        return state;
    }
  };
  