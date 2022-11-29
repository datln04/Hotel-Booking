import classNames from "classnames";
import React from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import Styles from "./../HotelService/HotelService.module.scss";
export default function HotelService({ listServiceCategory }) {
  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center",
        Styles.HotelService
      )}
    >
      <div className="col-8 row hs-my-32">
        {listServiceCategory &&
          listServiceCategory.map((item, index) => {
            return <ServiceItem item={item} key={index} />;
          })}
      </div>
    </div>
  );
}
