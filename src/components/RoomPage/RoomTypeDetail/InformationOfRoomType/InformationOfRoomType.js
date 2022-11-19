import classNames from "classnames";
import React from "react";
import FormValidate from "../FormValidate/FormValidate";
import InformationDetail from "../InformationDetail/InformationDetail";
import ServiceRoom from "../ServiceRoom/ServiceRoom";
import Styles from "./InformationOfRoomType.module.scss";
export default function InformationOfRoomType() {
  const infomationDetail = [
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
    { description: "12h", icon: "fa-solid fa-user-plus" },
  ];
  return (
    <div className={classNames("col-12 hs-bg-dark", Styles.gainContainer)}>
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center hs-pt-32",
          Styles.SectionTitle
        )}
      >
        <div
          className={classNames(
            "text-sm hs-text-dark-grey hs-px-32",
            Styles.SectionTitleItem
          )}
        >
          <a href="#tongQuan">Tổng Quan</a>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
          />
        </div>
        <div
          className={classNames(
            "text-sm hs-text-dark-grey hs-px-32",
            Styles.SectionTitleItem
          )}
        >
          <a href="#tienich">Tiện Ích</a>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
          />
        </div>
        <div
          className={classNames(
            "text-sm hs-text-dark-grey hs-px-32",
            Styles.SectionTitleItem
          )}
        >
          <a href="#hinhAnh">Hình Ảnh</a>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
          />
        </div>
      </div>
      <div
        className={classNames(
          "col-12 d-flex justify-content-center align-items-center"
        )}
      >
        <div className={classNames("col-md-10 row")}>
          <InformationDetail infomationDetail={infomationDetail} />
          <FormValidate />
          <ServiceRoom infomationDetail={infomationDetail} />
        </div>
      </div>
    </div>
  );
}
