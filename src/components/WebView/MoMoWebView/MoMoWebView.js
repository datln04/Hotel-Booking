/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import swal from "sweetalert";
import {
  PaymentMoMoConfirmState$,
  PaymentWithMoMoState$,
} from "../../../redux/selectors/PaymentSelector";
import * as paymentAction from "./../../../redux/actions/PaymentAction";

const MoMoWebView = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const paymentMoMo = useSelector(PaymentWithMoMoState$);
  const paymentWithMoMoConfirm = useSelector(PaymentMoMoConfirmState$);

  useEffect(() => {
    if (searchParams.toString().length > 0 && !searchParams.get("resultCode")) {
      dispatch(
        paymentAction.getPaymentWithMoMo.getPaymentWithMoMoRequest({
          amount: searchParams.get("amount"),
          orderId: searchParams.get("orderId").split("-"),
        })
      );
    }
    if (paymentMoMo && Object.keys(paymentMoMo).length !== 0) {
      dispatch(paymentAction.getPaymentWithMoMo.removePaymentWithMoMo());
      window.location.href = paymentMoMo.payUrl;
    }
    if (
      searchParams.get("resultCode") === "9000" &&
      Object.keys(paymentWithMoMoConfirm).length === 0
    ) {
      dispatch(
        paymentAction.getPaymentWithMoMoConfirm.getPaymentWithMoMoConfirmRequest(
          {
            partnerCode: searchParams.get("partnerCode"),
            orderId: searchParams.get("orderId"),
            requestId: searchParams.get("requestId"),
            amount: searchParams.get("amount"),
            orderInfo: searchParams.get("orderInfo"),
            orderType: searchParams.get("orderType"),
            transId: searchParams.get("transId"),
            resultCode: searchParams.get("resultCode"),
            message: searchParams.get("message"),
            payType: searchParams.get("payType"),
            responseTime: searchParams.get("responseTime"),
            extraData: searchParams.get("extraData"),
            signature: searchParams.get("signature"),
          }
        )
      );
    }
    if (Object.keys(paymentWithMoMoConfirm).length !== 0) {
      swal({
        title: "Chúc mừng",
        text: "Bạn đã thanh toán dịch vụ thành công",
        icon: "success",
        button: "Đã hiểu",
      }).then(() => (window.location.href = "/"));
    }
  }, [dispatch, paymentMoMo, paymentWithMoMoConfirm]);

  return <div></div>;
};

export default MoMoWebView;
