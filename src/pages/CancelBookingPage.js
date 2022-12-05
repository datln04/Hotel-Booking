import React from "react";
import { useRef } from "react";
import swal from "sweetalert";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import backgroundImage from "./../assets/images/background.jpg";

const CancelBookingPage = () => {
  const bookingIdRef = useRef();
  const emailRef = useRef();

  const handleCancelBooking = () => {
    if (bookingIdRef.current && emailRef.current) {
    } else {
      swal({
        title: "Vui lòng điền đầy đủ thông tin",
        text: "Hãy cho chúng tôi biết mã đặt phòng và email đặt phòng của bạn",
        icon: "error",
        button: "Đã hiểu",
      });
    }
  };

  return (
    <div className="main-screen col-12" style={{ backgroundColor: "#F5F5F5" }}>
      <Breadcrumb image={backgroundImage} />
      <div className="hs-bg-solid-dark" style={{ height: 50 }}></div>
      <div
        className="hs-bg-white hs-border-bottom-solid-dark"
        style={{ height: 60 }}
      ></div>
      <div className="d-flex justify-content-center">
        <div className="hs-py-64">
          <p className="weight-300 text-xl">Hủy đặt phòng của bạn</p>
          <p className="weight-300 text-lg hs-py-16">
            Để hủy đặt phòng, vui lòng nhập số đặt phòng của bạn và địa chỉ
            email được sử dụng để đặt phòng
          </p>

          <div className="hs-py-4">
            <p className="text-lg">Mã đặt phòng</p>
            <input
              type="text"
              ref={bookingIdRef}
              required
              className="w-75 hs-border-solid-dark hs-p-4"
            />
          </div>
          <div className="hs-py-8">
            <p className="text-lg">Email đăng ký</p>
            <input
              type="email"
              ref={emailRef}
              required
              className="w-75 hs-border-solid-dark hs-p-4"
            />
          </div>
          <div
            className="d-flex justify-content-center col-10"
            onClick={handleCancelBooking}
          >
            <p className="button hs-bg-dark-brown hs-text-white  text-center w-25 hs-mt-24 hs-py-8">
              Hủy Đặt Phòng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingPage;
