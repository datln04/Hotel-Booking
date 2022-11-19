import React from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import style from "../../pages/GeneralStyle.module.css"
import "./style.css"
export default function NavbarHome() {
  const [navbarRecommendActive, setNavbarRecommendActive] = useState(false);
  const [serviceBookingActive, setServiceBookingActive] = useState(false);
  const [navbarContactActive, setnavbarContactActive] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgba(173, 133, 75, 1)" : "rgba(255, 255, 255, 1)",
    };
  };
  const changeBackground = () => {
    if (window.scrollY >= 610) {
      setNavbarRecommendActive(true);
      setServiceBookingActive(true);
      setnavbarContactActive(true);
    } else {
      setNavbarRecommendActive(false);
      setServiceBookingActive(false);
      setnavbarContactActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="nav-bar-room">
      <div className="brand-logo">
        <img
          className="logo animate__animated animate__flip"
          src="https://i.ibb.co/jTjg1xS/LOGO.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        ></img>
        <span className="brand-name animate__animated animate__zoomIn">
          5 Men Hotel
        </span>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="nav-bar-link" to="/">
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="gioithieu">
              Giới Thiệu
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/room">
              Phòng
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/">
              Tin Tức
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/">
              Liên Hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
