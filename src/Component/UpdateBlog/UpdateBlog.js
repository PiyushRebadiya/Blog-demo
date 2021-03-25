import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const UpdateBlog = (props) => {
  
  let user = props.match.params.id;

  const [blank, setBlank] = useState({
    id: user,
    name: "",
    detail: "",
    img: "",
  });
  const [updateWait, setUpdateWait] = useState(false);

  const Data = useSelector((state) => state.home.update);

  useEffect(() => {
    setBlank({
      ...blank,
      name: Data.name,
      detail: Data.detail,
      img: Data.img,
    });
  }, []);

  const onChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      setBlank({ ...blank, img: reader.result });
    };
  };

  const updateBlog = () => {
    fetch("http://localhost:3003/data/" + blank.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blank),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Update Successfully!!!");
        setUpdateWait(!false);
        props.history.push("/home");
      });
    });
  };

  return (
    <div>
      <div col-sm-6 offset-sm-3>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setBlank({ ...blank, name: e.target.value })}
          defaultValue={Data.name}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Detail"
          defaultValue={Data.detail}
          onChange={(e) => setBlank({ ...blank, detail: e.target.value })}
        />
        <br />
        <input
          type="file"
          className="form-control"
          defaultValue={Data.img}
          onChange={onChange}
        />
        <br />
        <img style={{ height: 500 }} src={blank.img} />
        <button className="btn btn-success" onClick={updateBlog}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default UpdateBlog;
