// import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Photo from "../images/sass1.svg\\";
import { FaSun } from "react-icons/fa";

const Header = ({ fuson, SetFuson }) => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={Photo} alt="logo" />
          <nav>
            <NavLink to="/">Admin</NavLink>
            <NavLink to="/menu">Menu</NavLink>

            <button
              onClick={() => SetFuson(!fuson)}
              style={{
                background: fuson
                  ? "url(https://cdn.theatlantic.com/thumbor/gZVmDnrL2172-OZbsbRNP1shDXg=/408x0:2856x2448/1080x1080/media/img/mt/2015/06/blue_period_view_from_my_bedroom_window/original.jpg)"
                  : "url(https://woodstoneseniorliving.com/wp-content/uploads/2021/07/sun-blog.png)",
                paddingLeft: fuson ? "50px" : "",
                transform: "20s",
              }}
            >
              <div
                style={{
                  color: fuson ? "black" : "yellow",
                  transition: "0,5s",
                  marginTop: "10px",
                }}
              >
                <FaSun />
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
