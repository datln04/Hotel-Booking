import classNames from "classnames";
import React from "react";
import Styles from "./ServiceRoom.module.scss";
export default function ServiceRoom({ infomationDetail }) {
  return (
    <div
      id="tienich"
      className={classNames("col-12 col-md-8 hs-py-72 align-items-center")}
    >
      <div className={classNames("hs-text-white text-xl")}>
        <p>Tiện Ích</p>
      </div>
      <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)} />
      <div className={classNames("col-10 row")}>
        {infomationDetail &&
          infomationDetail.map((item, index) => {
            return (
              <div
                className={classNames("col-5 hs-text-white hs-mt-32 d-flex")}
              >
                <div className={classNames("col-2 hs-text-dark-brown")}>
                  <i class={item.icon}></i>
                </div>
                <div className={classNames("col-10")}>
                  <p>Nhận Phòng: {item.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
