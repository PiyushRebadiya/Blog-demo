import axios from "axios";

export const LIKE_DISLIKE_BLOG_REQUEST = "LIKE_DISLIKE_BLOG_REQUEST";
export const LIKE_DISLIKE_BLOG_SUCCESS = "LIKE_DISLIKE_BLOG_SUCCESS";
export const LIKE_DISLIKE_BLOG_FAILURE = "LIKE_DISLIKE_BLOG_FAILURE";

export const like_dislike_Blog_Request = () => {
  return {
    type: LIKE_DISLIKE_BLOG_REQUEST,
  };
};

export const like_dislike_Blog_Success = (user) => {
  return {
    type: LIKE_DISLIKE_BLOG_SUCCESS,
    payload: user,
  };
};

export const like_dislike_Blog_failure = (error) => {
  return {
    type: LIKE_DISLIKE_BLOG_FAILURE,
    payload: error,
  };
};

export function like_dislike_Blog_Api(data) {
  return (dispatch) => {
    dispatch(like_dislike_Blog_Request());
    axios.get(`http://localhost:3003/status`)
      .then((res) => {
        var data1 = res.data;
        var userData = data1.find(values => (values.userId === data.userId && values.blogId === data.blogId))
        if (userData) {
            if (userData.status === data.status) {
                axios.delete(`http://localhost:3003/status/${userData.id}`)
            }
            else if (userData.status !== data.status) {
                userData.status = data.status
                axios.put(`http://localhost:3003/status/${userData.id}`, userData)
            }
        } else {
            if (data.blogId) {
                axios.post(`http://localhost:3003/status`, data)
            }
        }
        dispatch(fecthLikeFun());
        return res.data;
      })
      .catch((error) => {
        dispatch(like_dislike_Blog_failure("Unable To Fetch Data"));
      });
  };
}

export function fecthLikeFun() {
  return (dispatch) => {
    dispatch(like_dislike_Blog_Request());
    axios.get("http://localhost:3003/status")
      .then((res) => {
        var user = res.data;
        if (user === undefined) {
          throw res.error;
        }
        dispatch(like_dislike_Blog_Success(user));
        return res.data;
      })
      .catch((error) => {
        dispatch(like_dislike_Blog_failure("error "));
      });
  };
}
