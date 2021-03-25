import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  PoweroffOutlined,
  SearchOutlined,
  HomeOutlined,
  UploadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import { logOut } from "../../Redux/Action/Login_Action";
import { createBlogUsers } from "../../Redux/Action/Create_Blog_Action";
import { homeUsers } from "../../Redux/Action/Home_Action";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [blank, setBlank] = useState({
    name: "",
    detail: "",
    img: "",
    like: [],
  });

  const dispatch = useDispatch();

  const result = useSelector((state) => state.login.users.user);

  const token = localStorage.getItem("token");

  let nameValidation = blank.name;
  let detailValidation = blank.detail;
  let imgValidation = blank.img;

  const onOpenModal = () => {
    setOpen(true);
  };
  
  const onCloseModal = () => {
    setOpen(false);
  };

  const createBlog = () => {
    if (
      nameValidation === "" ||
      detailValidation === "" ||
      imgValidation === ""
    ) {
      alert("Enter a value");
    } else {
      dispatch(createBlogUsers(blank));
      setTimeout(() => {
        setOpen(false);
        toast.info("New Blog Done!");
        <Redirect to="/home" />;
        dispatch(homeUsers());
      }, 2000);
      setBlank({
        name: "",
        detail: "",
        img: "",
      });
    }
  };

  const onChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      setBlank({ ...blank, img: reader.result });
    };
  };

  return (
    <div className="nav">
      <ul className="side">
        <Link to="/home" className="link">
          <li>
            <HomeOutlined />
          </li>
        </Link>
        <Link to="/search" className="link">
          <li>
            <SearchOutlined />
          </li>
        </Link>
        <Link to="/list" className="link">
          <li>
            <UnorderedListOutlined />
          </li>
        </Link>
        {token && (
          <li className="link" onClick={onOpenModal}>
            <UploadOutlined />
          </li>
        )}
        {token ? (
          <Link to="/clear" className="link">
            <li onClick={() => dispatch(logOut())}>
              <PoweroffOutlined />
            </li>
          </Link>
        ) : (
          <Link to="/" className="link">
            <li>Log In</li>
          </Link>
        )}
      </ul>
      <h1 className="userName">{result}</h1>
      <Modal open={open} onClose={onCloseModal}>
        <div col-sm-6 offset-sm-3>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setBlank({ ...blank, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Detail"
            onChange={(e) => setBlank({ ...blank, detail: e.target.value })}
          />
          <br />
          <input type="file" className="form-control" onChange={onChange} />
          <br />
          <button className="btn btn-success" onClick={createBlog}>
            Upload
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
