import {
  NEW_USERS_REQUEST,
  NEW_USERS_SUCCESS,
  NEW_USERS_FAILURE,
} from "../Action/Registration_Action";
// import { toast } from "react-toastify";

let registrationApiInitialState = {
  loading: false,
  isLogin: false,
  users: [],
  error: "",
};

export const RegistrationApiReducer = (state = registrationApiInitialState, action) => {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case NEW_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_USERS_SUCCESS:
    //   toast.success("Account successfully!");
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
        isLogin: false,
      };
    case NEW_USERS_FAILURE:
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
