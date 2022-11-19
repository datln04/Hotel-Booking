import classNames from "classnames";
import { useState } from "react";
import Styles from "./ServiceBookingItem.module.scss";

const ServiceBookingItem = () => {
  const [serviceBooking, setServiceBooking] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setServiceBooking(true);
    } else {
      setServiceBooking(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={classNames(
        "hs-bg-dark-8 col-12",
        serviceBooking
          ? Styles.ServiceBookingContainerActive
          : Styles.ServiceBookingContainer
      )}
    >
      <div
        className={classNames(
          "col-12 col-md-8 d-flex",
          Styles.ServiceBookingItems
        )}
      >
        <div
          className={classNames("col-2 col-md-3", Styles.ServiceBookingItem)}
        >
          <div
            className={classNames(
              "animate__animated animate__heartBeat animate__infinite",
              Styles.ServiceBookingTag
            )}
          >
            <p>Hot</p>
          </div>
          <a href="/" className="service-booking-icon">
            <i
              className={classNames(
                "fa-solid fa-people-roof hs-text-white-6",
                Styles.icon
              )}
            ></i>
          </a>
          <p className="hs-text-white-6">Phòng</p>
        </div>
        <div
          className={classNames("col-2 col-md-3", Styles.ServiceBookingItem)}
        >
          <div style={{ width: "40px", height: "15px", margin: "8px auto" }}>
          {/* <p>Hot</p> */}
        </div>
          <a href="/">
            <i
              className={classNames(
                "fa-solid fa-utensils hs-text-white-6",
                Styles.icon
              )}
            ></i>
          </a>
          <p className="hs-text-white-6">Nhà Hàng</p>
        </div>
        <div
          className={classNames("col-2 col-md-3", Styles.ServiceBookingItem)}
        >
   <div style={{ width: "40px", height: "15px", margin: "8px auto" }}>
          {/* <p>Hot</p> */}
        </div>
          <a href="/">
            <i
              className={classNames(
                "fa-solid fa-bell-concierge hs-text-white-6",
                Styles.icon
              )}
            ></i>
          </a>
          <p className="hs-text-white-6">Dịch Vụ</p>
        </div>
        <div
          className={classNames("col-2 col-md-3", Styles.ServiceBookingItem)}
        >
          <div
            className={classNames(
              "animate__animated animate__heartBeat animate__infinite",
              Styles.ServiceBookingTag
            )}
          >
            <p>Hot</p>
          </div>
          <a href="/">
            <i
              className={classNames(
                "fa-solid fa-person-swimming hs-text-white-6",
                Styles.icon
              )}
            ></i>
          </a>
          <p className="hs-text-white-6">Hồ Bơi</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingItem;
