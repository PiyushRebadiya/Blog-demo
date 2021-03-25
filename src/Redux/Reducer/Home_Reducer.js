import {
    HOME_USERS_REQUEST,
    HOME_USERS_SUCCESS,
    HOME_USERS_FAILURE,
    DELETE_USERS,
    UPDATE_USERS,
  } from "../Action/Home_Action";
  // import { toast } from "react-toastify";

  let homeApiInitialState = {
    loading: false,
    isLogin: false,
    users: [],
    update: [],
    error: "",
  };
  
  export const HomeApiReducer = (state = homeApiInitialState, action) => {
    // console.log("state", state);
    // console.log("action", action);
    switch (action.type) {
      case HOME_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case HOME_USERS_SUCCESS:
        // toast.success("Login successfully!");
        return {
          ...state,
          loading: false,
          isLogin: true,
          users: action.payload,
        };
      case HOME_USERS_FAILURE:
        // toast.error("Login Unsuccessful!");
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
        };
      case DELETE_USERS:
        // toast.error("DELETED!");
        return {
          ...state,
          users: state.users.filter(item => item.id !== item),
        };
      case UPDATE_USERS:
        // toast.error("UPDATE!");
        return {
          ...state,
          update: action.payload,
        };
      default:
        return state;
    }
  };
  