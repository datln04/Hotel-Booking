import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import style from "../../pages/GeneralStyle.module.css";
import "./style.css";
export default function Navbar() {
  const [navbarContactActive, setnavbarContactActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setnavbarContactActive(true);
    } else {
      setnavbarContactActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    // <div className="header">
    //   <div className="nav-bar">
    //     {/* <div
    //       className={
    //         navbarRecommendActive
    //           ? "nav-bar-recommend active"
    //           : "nav-bar-recommend"
    //       }
    //     >
    //       <span className="recommend-text">
    //         Nhiều Chương Trình Khuyến Mãi Dành Riêng Cho Bạn
    //       </span>
    //       <button className="btn btn-primary recommened-btn">
    //         Khám Phá Ngay
    //       </button>
    //     </div> */}

    //   </div>
    // </div>
    <div
      className={
        navbarContactActive ? "nav-bar-contact active" : "nav-bar-contact"
      }
    >
      <NavLink to="/home">
        <div className="brand-logo">
          <img
            className="logo animate__animated animate__flip"
            src="https://i.ibb.co/jTjg1xS/LOGO.png"
            alt="#"
            style={{ width: "50px", height: "50px" }}
          ></img>

          <span className="brand-name animate__animated animate__zoomIn">
            5 Men Hotel
          </span>
        </div>
      </NavLink>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink
              className="nav-bar-link"
              to={"/home" || "/"}
              style={({ isActive }) => {
                return { color: isActive ? "#AD854B" : "" };
              }}
            >
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              to="/gioithieu"
              style={({ isActive }) => {
                return { color: isActive ? "#AD854B" : "" };
              }}
            >
              Giới Thiệu
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              to="/room"
              style={({ isActive }) => {
                return { color: isActive ? "#AD854B" : "" };
              }}
            >
              Phòng
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              to="/tintuc"
              style={({ isActive }) => {
                return { color: isActive ? "#AD854B" : "" };
              }}
            >
              Tin Tức
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-bar-link"
              to="/lienhe"
              style={({ isActive }) => {
                return { color: isActive ? "#AD854B" : "" };
              }}
            >
              Liên Hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
