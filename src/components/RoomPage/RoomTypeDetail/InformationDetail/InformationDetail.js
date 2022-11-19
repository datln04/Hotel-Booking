import classNames from "classnames";
import React from "react";
import Styles from "./InformationDetail.module.scss";
export default function InformationDetail({ infomationDetail }) {
  return (
    <div className={classNames("col-12 col-md-8 hs-pt-32 align-items-center",Styles.InformationDetail)} id="tongQuan">
      <div className={classNames("hs-text-white")}>
        <p>Tổng Quan</p>
      </div>
      <hr
        className={classNames(
          "hs-text-dark-brown hs-mt-8",
          Styles.hr1
        )}
      />
      <div className={classNames("col-12 col-md-10 align-items-center row",Styles.InformationDetailItem)}>
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
