// import React, { useState, useEffect } from "react";
// import "./createBlog.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// import { logOut } from "../Redux/Action/Login_Action";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
// import { createBlogUsers } from "../Redux/Action/Create_Blog_Action";
// import {homeUsers} from '../Redux/Action/Home_Action'
// import { useHistory } from "react-router-dom";
// import { Button, Radio } from "antd";
// import {
//   PoweroffOutlined,
//   SearchOutlined,
//   HomeOutlined,
//   UploadOutlined,
//   UnorderedListOutlined,
// } from "@ant-design/icons";
// import Search from "antd/lib/transfer/search";

// const Navbar = (props) => {
//   const result = useSelector((state) => state.login.users.user);
//   let history = useHistory();
//   const [open, setOpen] = useState(false);
//   const [blank, setBlank] = useState({
//     name: "",
//     detail: "",
//     img: "",
//     like: [],
//   });
//   let nameValidation = blank.name;
//   let detailValidation = blank.detail;
//   let imgValidation = blank.img;
//   // const [name, setName] = useState("")
//   // const [detail, setDetail] = useState("")
//   // const [img, setImg] = useState("")
//   const onOpenModal = () => {
//     setOpen(true);
//   };
//   const onCloseModal = () => {
//     setOpen(false);
//   };
//   const dispatch = useDispatch();
//   var loginTag = useSelector((state) => state.login.isLogin);
//   // console.log("loginTag", loginTag);

//   const createBlog = () => {
//     console.log(blank);

//     // const formdata = new FormData();

//     // formdata.append('image',blank)
//     if (
//       nameValidation === "" ||
//       detailValidation === "" ||
//       imgValidation === ""
//     ) {
//       // toast.error("Enter a value!");
//       alert("Enter a value");
//     } else {
//       // fetch("http://localhost:3000/posts", {
//       // method: "Post",
//       // headers: {
//       // "Content-Type": "application/json",
//       // },
//       // body: JSON.stringify(blank),
//       // }).then((result) => {
//       // result.json().then((resp) => {
//       // console.log(resp);
//       dispatch(createBlogUsers(blank));
//       dispatch(homeUsers(blank))
//       console.log("blank", blank);
//       // props.history.push("/home");
//       toast.info("New Blog Done!");
//       setTimeout(() => {
//         setOpen(false);
//         history.push("/home");
//       }, 2000);
//       setBlank({
//         name: "",
//         detail: "",
//         img: "",
//         // like: [],
//       })
//       // });
//       // });
//     }
//   };

//   const onChange = (e) => {
//     let files = e.target.files;
//     console.log("files", files);

//     let reader = new FileReader();

//     reader.readAsDataURL(files[0]);
//     console.log("reader", reader);

//     reader.onload = function () {
//       console.log("result", reader.result);
//       setBlank({ ...blank, img: reader.result });
//     };
//   };

//   return (
//     <div>
//       {/* <ul className="side">
//         <Link to="/home" className="link">
//           <li>
//             <HomeOutlined />
//           </li>
//         </Link>
//         <Link to="/search" className="link">
//           <li>
//             <SearchOutlined />
//           </li>
//         </Link>
//         <Link to="/list" className="link">
//           <li>
//             <UnorderedListOutlined />
//           </li>
//         </Link>
//         <li className="link" onClick={onOpenModal}>
//           <UploadOutlined />
//         </li>
//         {loginTag ? (
//           <Link to="/clear" className="link">
//             <li onClick={() => dispatch(logOut())}>
//               <PoweroffOutlined />
//             </li>
//           </Link>
//         ) : (
//           <Link to="/" className="link">
//             <li>Log In</li>
//           </Link>
//         )}
//       </ul>
//       <h1 className="userName">{result}</h1> */}
//       <Modal open={open} onClose={onCloseModal}>
//         <div col-sm-6 offset-sm-3>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             onChange={(e) => setBlank({ ...blank, name: e.target.value })}
//           />
//           <br />
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Detail"
//             onChange={(e) => setBlank({ ...blank, detail: e.target.value })}
//           />
//           <br />
//           <input type="file" className="form-control" onChange={onChange} />
//           <br />
//           <button className="btn btn-success" onClick={createBlog}>
//             Upload
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Navbar;
