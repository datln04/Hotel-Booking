import classNames from "classnames";
import React from "react";
import { CONSTANT } from "../../../../util/constant/settingSystem";
import Styles from "./ServiceDescription.module.scss";
export default function ServiceDescription({ serviceDetail }) {
  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center",
        Styles.ServiceDescription
      )}
    >
      <div className={classNames("col-10 row hs-pt-32")}>
        <div className={classNames("col-12 col-md-7")}>
          <div className="hs-text-grey text-lg">{CONSTANT.HOTEL_NAME}</div>
          <div
            className={classNames(
              "hs-text-white text-xl hs-pt-24 text-uppercase"
            )}
          >
            {serviceDetail.name}
          </div>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
          />
          <div
            className={classNames(
              "hs-text-black-grey text-sm hs-pt-16 text-lg",
              Styles.DescriptionText
            )}
          >
            {serviceDetail.description}
          </div>
          {serviceDetail.id !== 7 && serviceDetail.id !== 8 && (
            <div className="hs-text-dark-grey hs-py-24  text-lg">
              Giờ phục vụ: 6:00 - 20:00
            </div>
          )}
        </div>
        <div className={classNames("col-12 col-md-5", Styles.ImageDescription)}>
          <img src={serviceDetail.images[0].pictureUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
