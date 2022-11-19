import classNames from "classnames";
import React from "react";
import { CONSTANT } from "../../../util/constant/settingSystem";
import { checkDate, formatPrice } from "../../../util/utilities/utils";
import Styles from "../RoomAvailability/RoomAvailability.module.scss";
import RoomPlaceHolder from "./../../../assets/images/fallbackImage.png";

export default function RoomAvailability({ data, callBackFunc }) {
  const filterUtilities = (utility) => {
    const icon = CONSTANT.ICONS.filter((icon) => icon.name === utility.name);
    if (icon) {
      const object = Object.assign({}, ...icon);
      return object;
    }
    return null;
  };

  const Room = (obj) => {
    const priceOfRoom = obj.roomPrices.find((roomPrice) => {
      return checkDate(new Date(), "DD/MM/YYYY") === roomPrice.date;
    });

    return (
      <div className="hs-bg-dark-9 hs-mb-64">
        <div className="hs-text-white text-lg hs-p-8">{obj.name}</div>
        <div className={Styles.ImageOfRoomAvailability}>
          {obj.images.length > 0 ? (
            obj.images.map((img, idx) => {
              return (
                <img
                  key={idx}
                  src={img.pictureUrl ? img.pictureUrl : RoomPlaceHolder}
                  alt={img.description}
                />
              );
            })
          ) : (
            <img src={RoomPlaceHolder} alt="Default_Image" />
          )}
        </div>
        <div className="d-flex col-12 justify-content-center">
          <div className="col-10 d-flex">
            <div className="col-6 text-lg hs-text-dark-brown d-flex align-items-center">
              <i className="fa-solid fa-bed hs-py-16 hs-pr-16"></i> Giường Đôi
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a
                href="/RoomValidate"
                className="hs-text-dark-brown text-lg hs-py-16"
              >
                Chi tiết và ảnh phòng
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className={classNames("col-10", Styles.hr)}></div>
        </div>
        <div className="d-flex col-12 justify-content-center">
          <div className="col-10 d-flex">
            <div className="col-10 d-flex row align-items-center hs-py-24">
              {obj.utilities.length > 0 &&
                obj.utilities.map((utility, idx) => {
                  const icon = filterUtilities(utility);
                  const Source = icon.src;
                  return (
                    <div key={idx} className="col-6 hs-py-8">
                      <div className="d-flex text-lg hs-text-white-6 align-items-center">
                        {icon && typeof Source === "string" ? (
                          <div>
                            <i className={classNames("hs-pr-16", Source)}></i>
                            {icon.name}
                          </div>
                        ) : (
                          <div className="d-flex">
                            <div className="hs-pr-16">
                              <Source />
                            </div>
                            {icon.name}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-auto d-flex row hs-py-16">
              <div className="hs-text-white-6 text-md">
                1 đêm, {obj.maxAdult} người
              </div>
              <div className="hs-text-white text-lg">
                {priceOfRoom
                  ? formatPrice(priceOfRoom.price, "vi-VN", "VND")
                  : formatPrice(obj.defaultPrice, "vi-VN", "VND")}
              </div>
              <div
                className={classNames(
                  "col-5 hs-bg-dark-brown hs-text-white text-lg text-center button"
                )}
                onClick={() =>
                  callBackFunc(
                    obj.id,
                    obj.name,
                    priceOfRoom,
                    obj.defaultPrice,
                    true
                  )
                }
              >
                Chọn
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames("col-11", Styles.RoomAvailability)}>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className={classNames("hs-mt-64")}>
              {Room(item)}
            </div>
          );
        })}
    </div>
  );
}
