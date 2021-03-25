import { combineReducers } from "redux";

import { LoginApiReducer } from "../Reducer/Login_Reducer";
import { RegistrationApiReducer } from "../Reducer/Registration_Reducer";
import { HomeApiReducer } from "../Reducer/Home_Reducer";
import { createLoginApiReducer } from "../Reducer/Create_Blog_Reducer";
import { commentLoginApiReducer } from "../Reducer/Comment_Blog_Reducer";
import { likeDislikeApiReducer } from "../Reducer/Like_Dislike_Blog_Reducer";

const rootReducer = combineReducers({
  login: LoginApiReducer,
  new: RegistrationApiReducer,
  home: HomeApiReducer,
  createBlog: createLoginApiReducer,
  comment: commentLoginApiReducer,
  likeDislike: likeDislikeApiReducer,
});

export default rootReducer;
