import {
  LIKE_DISLIKE_BLOG_REQUEST,
  LIKE_DISLIKE_BLOG_SUCCESS,
  LIKE_DISLIKE_BLOG_FAILURE,
} from "../Action/Like_Dislike_Blog_Action";

const like_Dislike_InitialState = {
  likeData: [],
};

export const likeDislikeApiReducer = (state = like_Dislike_InitialState, action) => {
  switch (action.type) {
    case LIKE_DISLIKE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIKE_DISLIKE_BLOG_SUCCESS:
      // let value = state.likeData
      // value.push(action.payload)
      return {
        ...state,
        loading: false,
        likeData: action.payload,
        error: "",
      };
    case LIKE_DISLIKE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        likeData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
