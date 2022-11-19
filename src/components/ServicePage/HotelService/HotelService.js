import classNames from "classnames";
import React from "react";
import image1 from "../../../assets/images/servicePage/dichvu1.jpg";
import image2 from "../../../assets/images/servicePage/dichvu2.jpg";
import image3 from "../../../assets/images/servicePage/dichvu3.jpg";
import image4 from "../../../assets/images/servicePage/dichvu4.jpg";
import ServiceItem from "../ServiceItem/ServiceItem";
import Styles from "./../HotelService/HotelService.module.scss";
export default function HotelService({listServiceCategory}) {
  const data = [
    { image: image1, title: "Thức Ăn Và Đồ Uống" },
    { image: image2, title: "Đưa Đón Sân Bay" },
    { image: image3, title: "Hồ Bơi" },
    { image: image4, title: "Massage Thư Giãn" },
  ];

  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center",
        Styles.HotelService
      )}
    >
      <div className="col-10 row hs-my-32">
        {listServiceCategory &&
          listServiceCategory.map((item, index) => {
            return <ServiceItem item={item} key={index} />;
          })}
      </div>
    </div>
  );
}
