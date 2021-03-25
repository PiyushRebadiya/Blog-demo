import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ReactReadMoreReadLess from "react-read-more-read-less";

import { homeUsers, deleteBlog } from "../../Redux/Action/Home_Action";
import "./searchBlog.css";

const SearchBlog = () => {
  const [noData, setNoData] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const dispatch = useDispatch();

  const deleteButton = (id) => {
    dispatch(deleteBlog(id));
    dispatch(homeUsers());
  };

  const search = (key) => {
    // console.log("key", key);
    fetch("http://localhost:3003/data?q=" + key).then((data) => {
      data.json().then((resp) => {
        // console.log("search", resp);
        if (resp.length > 0) {
          setSearchData(resp);
          setNoData(false);
        } else {
          setSearchData(null);
          setNoData(true);
        }
      });
    });
  };

  return (
    <div>
      <div class="search-container">
        <form>
          <h1>Search Blog</h1>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => search(e.target.value)}
          />
          <div>
            {searchData ? (
              <div>
                {" "}
                {searchData.map((item, index) => (
                  <div key={index} className="col-md-3 col-sm-6 pb-3 item">
                    <div className="card item-card card-block">
                      <Button
                        type="btn btn-danger"
                        shape="circle"
                        icon={<DeleteOutlined />}
                        className="deleteButton"
                        onClick={() => deleteButton(item.id)}
                      />
                      <img src={item.img} alt="Photo of sunset" />
                      <h5 className="card-title  mt-3 mb-3">{item.name}</h5>
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
                      <div class="row">
                        <div class="col-sm">
                          {" "}
                          <Button
                            type="btn btn-primary"
                            shape="circle"
                            icon={<LikeOutlined />}
                          />
                        </div>
                        <div class="col-sm">
                          {" "}
                          <Button
                            type="btn btn-primary"
                            shape="circle"
                            icon={<DislikeOutlined />}
                          />
                        </div>
                        <div class="col-sm">
                          {" "}
                          <Button
                            type="btn btn-info"
                            shape="circle"
                            icon={<CommentOutlined />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {noData && <h3>No Data Found</h3>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBlog;
