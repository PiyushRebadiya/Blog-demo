import {
    CREATE_BLOG_USERS_REQUEST,
    CREATE_BLOG_USERS_SUCCESS,
    CREATE_BLOG_USERS_FAILURE,
  } from "../Action/Create_Blog_Action";
  // import { toast } from "react-toastify";
  
  let createLoginApiInitialState = {
    loading: false,
    isLogin: false,
    users: [],
    error: "",
  };
  
  export const createLoginApiReducer = (state = createLoginApiInitialState, action) => {
    // console.log("state", state);
    // console.log("action", action);
    switch (action.type) {
      case CREATE_BLOG_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_BLOG_USERS_SUCCESS:
        // toast.success("Account successfully!");
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: "",
          isLogin: false,
        };
      case CREATE_BLOG_USERS_FAILURE:
        // toast.error("Account Unsuccessful!");
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
  