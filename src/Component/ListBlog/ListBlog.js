import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  homeUsers,
  deleteBlog,
  updateBlog,
} from "../../Redux/Action/Home_Action";
import "./listBlog.css";

const ListBlog = (props) => {
  
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.home.users);

  useEffect(() => {
    dispatch(homeUsers());
  }, []);

  const deleteButton = (id) => {
    dispatch(deleteBlog(id));
    dispatch(homeUsers());
  };

  const editButton = (key) => {
    dispatch(updateBlog(key));
    props.history.push("/update/" + key);
  };

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data &&
            Data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.img}
                      className="mr-2 images"
                      size="10"
                      round={true}
                      alt="Avatar"
                    />
                  </td>
                  <td>
                    <h5>{item.name}</h5>
                  </td>
                  <td>
                    <h6>{item.detail}</h6>
                  </td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => editButton(item.id)}
                    >
                      Edit
                    </button>                             
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteButton(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListBlog;
