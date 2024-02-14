import React, { useState } from "react";
import "./admin.scss";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";\

const Admin = () => {
  const [images, SetImages] = useState("");
  const [name, SetName] = useState("");
  const [price, SetPrice] = useState("");

  function getData() {
    let obj = {
      id: Date.now(),
      images,
      name,
      price,
    };
    let data = JSON.parse(localStorage.getItem("card")) || [];
    data.push(obj);
    localStorage.setItem("card", JSON.stringify(data));
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>ГЛАВНЫЙ</h1>
          <div className="inputs">
            <input
              onChange={(event) => {
                SetImages(event.target.value);
              }}
              type="text"
              placeholder="image URL"
              value={images}
            />
            <input
              onChange={(event) => {
                SetName(event.target.value);
              }}
              type="text"
              placeholder="food name"
              value={name}
            />
            <input
              onChange={(event) => {
                SetPrice(event.target.value);
              }}
              type="text"
              placeholder="price"
              value={price}
            />
          </div>
          <Link to="/menu">
            <button onClick={() => getData()} className="create">
              CREATE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
