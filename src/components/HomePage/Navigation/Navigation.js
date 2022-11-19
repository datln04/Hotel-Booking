import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CONSTANT } from "../../../util/constant/settingSystem";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isExtend, setExtend] = useState(false);
  const [isScroll, setScrollActive] = useState(false);

  const handleOpenNav = () => {
    setExtend(!isExtend);
  };
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={classNames(
        "d-block d-md-flex hs-bg-dark hs-text-white",
        isScroll ? Styles.navContainerActive : Styles.navContainer
      )}
    >
      <div
        className={classNames(
          "row col-12 alight-item-center",
          Styles.navContent
        )}
      >
        {isExtend && <MobileNavigation onClick={handleOpenNav} />}
        <div className={classNames("col-md-4 d-flex", Styles.rightNav)}>
          <div
            className={classNames("d-md-none", Styles.btnNav)}
            onClick={handleOpenNav}
          >
            <i
              className="fa-solid fa-bars hs-text-white"
              style={{ fontSize: 20 }}
            ></i>
          </div>
          <div className={classNames("col-md-4", Styles.logo)}>
            <img
              className="logo"
              src="https://i.ibb.co/jTjg1xS/LOGO.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            ></img>
          </div>
          <div className="col-md-8 hs-pl-12 text-lg">{CONSTANT.HOTEL_NAME}</div>
        </div>
        <div className="col-10 col-md-8">
          <div
            className={classNames("d-none d-md-flex col-12", Styles.leftNav)}
          >
            {CONSTANT.NAV_ITEMS.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={classNames("text-sm", Styles.navLink)}
                >
                  <NavLink
                    to={item.link}
                    style={({ isActive }) => {
                      return { color: isActive ? "#AD854B" : "" };
                    }}
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
