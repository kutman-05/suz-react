import React, { useEffect, useState } from "react";
import "./menu.scss";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [product, SetProduct] = useState([]);

  function removeProduct(id) {
    let data = JSON.parse(localStorage.getItem("card")) || [];
    data.splice(id, 1)
    localStorage.setItem("card", JSON.stringify(data));
    Product();
  }

  function Product() {
    let data = JSON.parse(localStorage.getItem("card")) || [];
    SetProduct(data);
  }
  useEffect(() => {
    Product();
  }, []);

  return (
    <div id="menu">
      <div className="container">
        <div className="box">
          <div className="menu">
            <h1>MENU</h1>
            <div className="menuBlocks">
              {product.map((el, index) => {
                return (
                  <div className="menuBlock">
                    <img src={el.images} alt="" />
                    <div className="menuText">
                      <h2>{el.name}</h2>
                      <h3>{el.price}</h3>
                      <button
                        onClick={() => removeProduct(index)}
                        className="knopka1"
                      >
                        <MdDelete />
                      </button>
                      <NavLink to={"/edit"}>
                        <button className="knopka">EDIT</button>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
