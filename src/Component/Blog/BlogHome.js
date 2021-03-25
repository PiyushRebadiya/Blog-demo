import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Modal } from "react-responsive-modal";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Badge from "@material-ui/core/Badge";
import { toast } from "react-toastify";
import { animateScroll as scroll } from "react-scroll";

import Carousel from "../../Layout/Design/Carousel";
import {
  homeUsers,
  deleteBlog,
  updateBlog,
} from "../../Redux/Action/Home_Action";
import {
  commenteBlogUsers,
  commenteBlogUsersGet,
} from "../../Redux/Action/Comment_Blog_Action";
import {
  like_dislike_Blog_Api,
  fecthLikeFun,
} from "../../Redux/Action/Like_Dislike_Blog_Action";
import "./blogHome.css";

const BlogHome = (props) => {

  const statusState = useSelector((state) => state.likeDislike.likeData);

  const [blank, setBlank] = useState({
    blog_id: "",
    comments: "",
  });
  const [likeDislike, setLikeDisLike] = useState({
    blogId: "",
    userId: "",
    likeUnlike: "",
  });
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const dispatch = useDispatch();

  const Data = useSelector((state) => state.home.users);

  const commentData = useSelector((state) => state.comment.users);

  useEffect(() => {
    dispatch(homeUsers());
    dispatch(commenteBlogUsersGet(blank));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fecthLikeFun());
    }, 500);
    if (
      likeDislike.likeUnlike === "like" ||
      likeDislike.likeUnlike === "dislike"
    ) {
      dispatch(like_dislike_Blog_Api(likeDislike));
      setLikeDisLike({ ...likeDislike, blogId: "", likeUnlike: "" });
    }
  }, [likeDislike.likeUnlike]);

  const deleteButton = (id) => {
    dispatch(deleteBlog(id));
    dispatch(homeUsers());
  };

  const editButton = (key) => {
    dispatch(updateBlog(key));
    props.history.push("/update/" + key);
  };

  const onOpenModal = (item) => {
    setOpen(true);
    setBlank({ blog_id: item });
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("token");

  const commentAdd = () => {
    dispatch(commenteBlogUsers(blank));
    dispatch(commenteBlogUsers(blank));
  };

  const statusHandler = (id, value) => {
    setLikeDisLike({ blogId: id, userId: token, likeUnlike: value });
  };

  return (
    <div>
      <Carousel />
      <div className="App">
        <h3>Blog of Model's</h3>
        <div className="row">
          {Data &&
            Data.map((item, index) => {
              return (
                <div key={index} className="col-md-3 col-sm-6 pb-3 item">
                  <div className="card item-card card-block">
                    <Button
                      type="btn btn-danger"
                      shape="circle"   
                      icon={<DeleteOutlined />}
                      className="deleteButton"
                      onClick={() => deleteButton(item.id)}
                    />
                    <Button
                      type="btn btn-light"
                      shape="circle"
                      icon={<EditOutlined />}
                      className="editButton"
                      onClick={() => editButton(item.id)}
                    />
                    <img src={item.img} alt="Photo of sunset" />
                    <h5 className="card-title mt-3 mb-3">{item.name}</h5>
                    <ReactReadMoreReadLess
                      charLimit={20}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {item.detail}
                    </ReactReadMoreReadLess>
                    <br />
                    <div className="row">
                      <div className="col-sm">
                        {" "}
                        <Badge
                          badgeContent={
                            statusState
                              ? statusState.filter(
                                  (point) =>
                                    point.blogId === item.id &&
                                    point.likeUnlike === "like"
                                ).length
                              : 0
                          }
                          color="secondary"
                        >
                          <Button
                            type="btn btn-primary"
                            shape="circle"
                            icon={<LikeOutlined />}
                            onClick={() => statusHandler(item.id, "like")}
                          ></Button>
                        </Badge>
                      </div>
                      <div className="col-sm">
                        {" "}
                        <Badge
                          badgeContent={
                            statusState
                              ? statusState.filter(
                                  (point) =>
                                    point.blogId === item.id &&
                                    point.likeUnlike === "dislike"
                                ).length
                              : 0
                          }
                          color="secondary"
                        >
                          <Button
                            type="btn btn-primary"
                            shape="circle"
                            icon={<DislikeOutlined />}
                            onClick={() => statusHandler(item.id, "dislike")}
                          />
                        </Badge>
                      </div>
                      <div className="col-sm">
                        {" "}
                        <Button
                          type="btn btn-info"
                          shape="circle"
                          icon={<CommentOutlined />}
                          onClick={() => onOpenModal(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <Modal open={open} onClose={onCloseModal}>
            <div className="commentBox">
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter Comment..."
                onChange={(e) =>
                  setBlank({ ...blank, comments: e.target.value })
                }
              />
              <br />
              <button className="btn btn-success" onClick={() => commentAdd()}>
                Post
              </button>
              {commentData &&
                commentData.map((item) => {
                  return (
                    <h5>
                      {item.blog_id}) {item.comments}
                    </h5>
                  );
                })}
            </div>
          </Modal>
        </div>
      </div>
      <span onClick={scrollToTop}>To the Top...</span>
    </div>
  );
};

export default BlogHome;
