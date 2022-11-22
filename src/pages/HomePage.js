/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "../components/HomePage/Header/Header";
import InfoBookingRoom from "../components/HomePage/InfoBookingRoom/InfoBookingRoom";
import IntroduceHotel from "../components/HomePage/IntroduceHotel/IntroduceHotel";
import ListHotelService from "../components/HomePage/ListHotelService/ListHotelService";
import OverviewRoom from "../components/HomePage/OverviewRoom/OverviewRoom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentVnPayConfirmState$ } from "../redux/selectors/PaymentSelector";
import * as paymentAction from "../redux/actions/PaymentAction";
import { CONSTANT } from "../util/constant/settingSystem";
import swal from "sweetalert";

export default function HomePage() {
  const dispatch = useDispatch();
  const paymentVnPayConfirm = useSelector(PaymentVnPayConfirmState$);
  useEffect(() => {
    if (paymentVnPayConfirm && Object.keys(paymentVnPayConfirm).length !== 0) {
      swal({
        title: "Payment Successfully",
        icon: "success",
        button: "Congratulation",
      });
      sessionStorage.removeItem(CONSTANT.PAYMENT_INFO);
      dispatch(
        paymentAction.getPaymentVnPayConfirm.removePaymentVnPayConfirm()
      );
    }
  }, [paymentVnPayConfirm]);

  return (
    <div className="main-screen">
      <Header />
      <InfoBookingRoom />
      <IntroduceHotel />
      <OverviewRoom />
      <ListHotelService />
    </div>
  );
}
