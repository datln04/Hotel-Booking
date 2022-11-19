import classNames from "classnames";
import React from "react";
import Styles from "./ServiceDescription.module.scss";
import imageDescription from "../../../../assets/images/servicePage/serviceDetail/Thucandouong.jpg";
export default function ServiceDescription({serviceDetail}) {
  const data = {
    hotel_title: "5 Men Hotel",
    welcome_label: "Thức ăn, đồ uống đa dạng phong phú",
    description:
      "Với sứ mệnh đem lại trãi nghiệm tuyệt vời cho khách hàng chúng tôi cung cấp các món ăn và thức uống phong phú và đa dạng để quý khách có thể tham khảo và lựa chọn để làm hài lòng cũng như gia tăng trãi nghiệm của khách hàng.",
    imageDescription: imageDescription,
  };
  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center",
        Styles.ServiceDescription
      )}
    >
      <div className={classNames("col-10 row hs-pt-32")}>
        <div className={classNames("col-12 col-md-7")}>
          <div className="hs-text-grey text-lg">{data.hotel_title}</div>
          <div
            className={classNames(
              "hs-text-white text-xl hs-pt-24 text-uppercase"
            )}
          >
            {data.welcome_label}
          </div>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
          />
          <div
            className={classNames(
              "hs-text-black-grey text-sm hs-pt-16",
              Styles.DescriptionText
            )}
          >
            {serviceDetail.description}
          </div>
        </div>
        <div className={classNames("col-12 col-md-5", Styles.ImageDescription)}>
          <img src={data.imageDescription} alt="" />
        </div>
      </div>
    </div>
  );
}
