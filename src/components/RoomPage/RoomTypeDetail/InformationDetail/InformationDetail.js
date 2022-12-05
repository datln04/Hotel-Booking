import classNames from "classnames";
import React from "react";
import Styles from "./InformationDetail.module.scss";
export default function InformationDetail({ roomType, hotelInfo }) {
  return (
    <div
      className={classNames(
        "col-12 col-md-8 hs-pt-32 align-items-center",
        Styles.InformationDetail
      )}
    >
      <div className={classNames("hs-text-white")}>
        <p>Tổng Quan</p>
      </div>
      <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)} />
      <div className="col-12 d-flex row hs-pt-16">
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-right-to-bracket"></i>
          <p className="text-md hs-text-dark-grey">
            Nhận phòng: {hotelInfo.checkInTime}
          </p>
        </div>
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-right-from-bracket"></i>
          <p className="text-md hs-text-dark-grey">
            Trả phòng: {hotelInfo.checkOutTime}
          </p>
        </div>
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-utensils"></i>
          <p className="text-md hs-text-dark-grey">Buffet sáng</p>
        </div>
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i
            className={classNames(
              "hs-text-dark-brown hs-mr-16",
              roomType.person.icon
            )}
          ></i>
          <p className="text-md hs-text-dark-grey">
            {roomType.person.num} người
          </p>
        </div>
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i
            className={classNames(
              "hs-text-dark-brown hs-mr-16",
              roomType.size.icon
            )}
          ></i>
          <p className="text-md hs-text-dark-grey">{roomType.size.num}m2</p>
        </div>
        <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
          <i
            className={classNames(
              "hs-text-dark-brown hs-mr-16",
              roomType.inFront.icon
            )}
          ></i>
          <p className="text-md hs-text-dark-grey">{roomType.inFront.name}</p>
        </div>
      </div>
    </div>
  );
}
