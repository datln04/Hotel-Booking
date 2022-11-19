import classNames from "classnames";
import { useState } from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Styles from "./Recommend.module.scss";

const Recommend = () => {
  const [isExtend, setExtend] = useState(false);

  const handleOpenNav = () => {
    setExtend(!isExtend);
  };

  const handleOnClick = () => {};

  return (
    <div
      className={classNames(
        "hs-bg-dark-8 d-flex col-12",
        Styles.recommendContainer
      )}
    >
      {isExtend && <MobileNavigation onClick={handleOpenNav} />}
      <div
        className={classNames("d-md-none", Styles.btnNav)}
        onClick={handleOpenNav}
      >
        <i
          className="fa-solid fa-bars hs-text-white"
          style={{ fontSize: 20 }}
        ></i>
      </div>
      <div className="hs-text-white hs-px-16 hs-py-16 d-none d-md-flex text-sm">
        Nhiều Chương Trình Khuyến Mãi Dành Riêng Cho Bạn.
      </div>
      <div className="hs-px-8 hs-py-8">
        <button
          onClick={handleOnClick}
          className={classNames("btn btn-outline-primary", Styles.recommendBtn)}
        >
          Khám Phá Ngay!
        </button>
      </div>
    </div>
  );
};

export default Recommend;
