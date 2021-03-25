import {
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOG_OUT,
} from "../Action/Login_Action";
// import { toast } from "react-toastify";

let loginApiInitialState = {
  loading: false,
  isLogin: false,
  users: [],
  error: "",
};

export const LoginApiReducer = (state = loginApiInitialState, action) => {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case LOGIN_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USERS_SUCCESS:
      // toast.success("Login successfully!");
      return {
        ...state,
        loading: false,
        isLogin: true,
        users: action.payload,
        error:""
      };
    case LOGIN_USERS_FAILURE:
      // toast.error("Login Unsuccessful!");
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        isLogin: false,
        users: "",
        error: "",
      };
    default:
      return state;
  }
};
