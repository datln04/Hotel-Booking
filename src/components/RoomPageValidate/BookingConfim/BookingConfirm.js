/* eslint-disable array-callback-return */
import Cookies from "js-cookie";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import swal from "sweetalert";
import * as paymentAction from "../../../redux/actions/PaymentAction";
import { PaymentVnPayConfirmState$ } from "../../../redux/selectors/PaymentSelector";
import { CONSTANT } from "../../../util/constant/settingSystem";
import { combineName, formatPrice } from "../../../util/utilities/utils";

const BookingConfirm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let totalPrice = 0;
  const [searchParams] = useSearchParams();
  const paymentVnPayConfirm = useSelector(PaymentVnPayConfirmState$);
  const location = useLocation();
  const [bookingInfo, setBooingInfo] = useState(
    location.state?.payment ?? null
  );
  const [isAllNull, setAllNull] = useState(0);
  const [isSuccess, setSuccess] = useState(0);

  window.onpopstate = () => {
    navigate("/");
  };

  useEffect(() => {
    if (
      (location.state === undefined ||
        location.state === null ||
        location.state === "") &&
      !(
        searchParams.has("vnp_ResponseCode") &&
        searchParams.get("vnp_ResponseCode") === "00"
      )
    ) {
      window.location.href = "/";
    }
    if (bookingInfo && bookingInfo.length > 0) {
      // if (bookingInfo.busyRooms && bookingInfo.busyRooms.length > 0) {
      let numOfRoomFailure = "";
      let numOfRoomSuccess = "";
      bookingInfo.map((room, index) => {
        if (room.bookingFailureRoom != null) {
          setAllNull(index + 1);
          numOfRoomFailure +=
            "phòng " +
            room.bookingFailureRoom.bookingFailureRoomName +
            ` số ${index + 1} `;
        } else {
          numOfRoomSuccess +=
            "phòng " + room.roomType.name + ` số ${index + 1}`;
          setSuccess(index + 1);
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }
      });
      if (numOfRoomFailure.length > 0 && numOfRoomSuccess.length > 0) {
        swal({
          title: `Thanh toán thành công ${numOfRoomSuccess} `,
          text: `${numOfRoomFailure} thanh toán không thành công do chúng tôi hết phòng, xin chân thành xin lỗi quý khách, kính mong quý khách có thể đặt lại phòng phù hợp cho chuyến lưu trú của mình`,
          icon: "info",
          button: "Thử lại",
        });
      } else if (numOfRoomSuccess.length > 0) {
        swal({
          title: "Thanh toán thành công",
          text: "Vui lòng kiểm tra thông tin đặt phòng của bạn. Nếu bạn có bất kì thắc mắc liên quan đến thông tin đặt phòng vui lòng liên hệ đến lễ tân qua số điện thoại 0987654321",
          icon: "success",
          button: "Xác nhận",
        });
      } else {
        swal({
          title: "Thông báo",
          text: "Chân thành xin lỗi quý khách, hiện tại phòng của quý khách đặt đã hết - Xin quý khách vui lòng đặt phòng khác phù hợp cho chuyến lưu trú của mình - Xin lỗi về sự bất tiện này",
          icon: "error",
          button: "Đã Hiểu!",
        }).then(() => (window.location.href = "/"));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingInfo]);

  useEffect(() => {
    if (typeof paymentVnPayConfirm !== "number") {
      if (
        paymentVnPayConfirm &&
        Object.keys(paymentVnPayConfirm).length !== 0
      ) {
        if (paymentVnPayConfirm.length >= 0) {
          dispatch(
            paymentAction.getPaymentVnPayConfirm.removePaymentVnPayConfirm()
          );
          setBooingInfo(paymentVnPayConfirm);
        }
      }
      if (paymentVnPayConfirm.length === 0) {
        swal({
          title: "Thông báo",
          text: "Chân thành xin lỗi quý khách, hiện tại phòng của quý khách đặt đã hết - Xin quý khách vui lòng đặt phòng khác phù hợp cho chuyến lưu trú của mình - Xin lỗi về sự bất tiện này",
          icon: "error",
          button: "Đã Hiểu!",
        }).then(() => (window.location.href = "/"));
      }
      if (
        Cookies.get(CONSTANT.PAYMENT_INFO) !== undefined &&
        Object.keys(paymentVnPayConfirm).length === 0
      ) {
        const dataMock = Cookies.get(CONSTANT.PAYMENT_INFO);
        const data = JSON.parse(dataMock);
        dispatch(
          paymentAction.getPaymentVnPayConfirm.getPaymentVnPayConfirmRequest({
            bookingDates: data.date,
            customer: data.customerInfo,
            persons: data.count,
            serviceBooking: data.requestService,
            roomTypes: data.roomSelect,
            bookingNotes: data.specialUtility,
            vnp_Amount: data.vnp_Amount,
            hotel_id: data.hotel_id,
            specialUtilities: data.utilities,
            paymentMethod: searchParams.has("vnp_ResponseCode") ? 3 : 0,
          })
        );
      }
    }
    return () => Cookies.remove(CONSTANT.PAYMENT_INFO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentVnPayConfirm]);

  const getPrice = (roomType) => {
    const currentDate = moment(new Date());
    let price = 0;
    const priceByDate = roomType.roomPrices.find(
      (roomPrice) => moment(roomPrice.date) === currentDate
    );

    if (priceByDate) {
      price = priceByDate.price;
    } else {
      price = roomType.defaultPrice;
    }
    return price;
  };

  const getPriceByRoom = (roomType, booking) => {
    const currentDate = booking.arrivalDate.split(" ")[0];
    let price = 0;
    let servicePrice = 0;
    const priceByDate = roomType.roomPrices.find(
      (roomPrice) => moment(roomPrice.date) === currentDate
    );

    if (booking.orders.length > 0) {
      servicePrice = booking.orders[0].totalAmount;
    }

    if (priceByDate) {
      price = priceByDate.price;
    } else {
      price = roomType.defaultPrice;
    }
    totalPrice += Number(price + servicePrice);
    return Number(price + servicePrice);
  };

  const handleOpenCancelRoom = () => {
    swal({
      title: "Thông tin",
      text: "Bạn cần phải gọi cho lễ tân để hủy đặt phòng  \n \t\t Số điện thoại: 0987654321",
      icon: "info",
      button: "Đã hiểu!",
    });
  };

  return (
    bookingInfo &&
    bookingInfo.length > 0 &&
    isSuccess > 0 && (
      <div className="col-12 hs-bg-dark-low d-flex justify-content-center">
        <div className="col-8">
          <div className="col-12 d-flex justify-content-center hs-mt-96">
            <div className="text-center hs-text-dark-grey text-md ">
              <div className="text-start hs-text-white text-lg">
                Chúc mừng bạn! Đặt phòng đã được xác nhận.
              </div>
              <div className="d-flex align-items-center hs-pt-24">
                <i className="fa-solid fa-check hs-text-green-light text-md"></i>
                <div className="hs-px-16 ">
                  Xác nhận đặt phòng đã được gửi tới email của bạn !
                </div>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-check hs-text-green-light text-md"></i>
                <div className="hs-px-16 ">
                  Đặt phòng của bạn tại{" "}
                  <span className="hs-text-dark-brown font-weight-bold">
                    5 Men Hotel{" "}
                  </span>
                  đã được xác nhận
                </div>
              </div>
              <div className="d-flex align-items-center hs-pb-24">
                <i className="fa-solid fa-check hs-text-green-light text-md"></i>
                <div className="hs-px-16 ">
                  Bạn có thể{" "}
                  <span
                    className="text-decoration-underline hs-text-solid-blue button"
                    onClick={handleOpenCancelRoom}
                  >
                    thay đổi hoặc hủy đặt phòng của mình{" "}
                  </span>{" "}
                  bất cứ lúc nào
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 hs-pb-48 text-md hs-text-dark-grey">
            <p className="text-lg hs-text-white">
              Kiểm tra các thông tin của bạn
            </p>
            <div className="hs-my-16 hs-bg-dark-9 ">
              <div className="hs-p-16 d-flex text-md col-12">
                <div className="col-6 hs-border-right-solid-dark">
                  <div className="hs-text-white text-lg hs-py-24">
                    Thông tin khách hàng
                  </div>
                  <div className="d-flex col-12 hs-py-8">
                    <div className="col-3">Họ và tên:</div>
                    <div className="col-9 hs-text-white">
                      {combineName(
                        bookingInfo[0].booking.customer.firstName,
                        bookingInfo[0].booking.customer.middleName,
                        bookingInfo[0].booking.customer.lastName
                      )}
                    </div>
                  </div>
                  <div className="d-flex col-12 hs-py-8">
                    <div className="col-3">Email:</div>
                    <div className="col-9 hs-text-white">
                      {bookingInfo[0].booking.customer.email}
                    </div>
                  </div>
                  <div className="d-flex col-12 hs-py-8">
                    <div className="col-3">Điện thoại:</div>
                    <div className="col-9 hs-text-white">
                      {bookingInfo[0].booking.customer.phoneNumber &&
                        bookingInfo[0].booking.customer.phoneNumber}
                    </div>
                  </div>
                </div>
                <div className="col-6 container-fluid">
                  {bookingInfo.map((data, index) => {
                    if (data.bookingFailureRoom == null) {
                      const priceRoom = getPriceByRoom(
                        data.roomType,
                        data.booking
                      );
                      const price = getPrice(data.roomType);
                      return (
                        <>
                          <div
                            key={index}
                            className="hs-text-white text-lg hs-py-24"
                          >
                            Thông tin đặt phòng {index + 1}
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div className="col-4">Mã số đặt phòng: </div>
                            <div className="col-8">{data.booking.id}</div>
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div className="col-6 d-flex">
                              <p className="col-5">Ngày đến: </p>
                              <p className="col-6">
                                {data.booking.arrivalDate.split(" ")[0]}
                              </p>
                            </div>
                            <div className="col-6 d-flex">
                              <p className="col-5">Ngày đi: </p>
                              <p className="col-6">
                                {data.booking.departureDate.split(" ")[0]}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div className="col-6 d-flex">
                              <p className="col-5">Nhận phòng: </p>
                              <p className="col-6">{data.hotel.checkInTime}</p>
                            </div>
                            <div className="col-6 d-flex">
                              <p className="col-5">Trả phòng: </p>
                              <p className="col-6">{data.hotel.checkOutTime}</p>
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div className="col-6 d-flex">
                              <p className="col-5">Loại phòng: </p>
                              <p className="col-6">{data.roomType.name}</p>
                            </div>
                            <div className="col-6 d-flex">
                              <p className="col-5">Loại giường: </p>
                              <p className="col-6">{data.roomType.bedType}</p>
                            </div>
                          </div>
                          <div className="d-flex col-6 hs-py-8">
                            <div className="col-5">Tiền phòng:</div>
                            <div className="col-6">
                              {formatPrice(price, "vi-VN", "VND")}
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div>Yêu cầu khác: {data.booking.specialNote}</div>
                          </div>
                          <div className="d-flex col-12 hs-py-8">
                            <div className="col-3">Đón sân bay: </div>
                            <div className="col-9">
                              {data.service
                                ? data.service.name +
                                  " " +
                                  formatPrice(
                                    data.service.price,
                                    "vi-VN",
                                    "VND"
                                  )
                                : "Không"}
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-py-16 hs-text-white text-lg align-items-center">
                            <div className="col-4 text-md">
                              Giá theo phòng:{" "}
                            </div>
                            <div className="col-8">
                              {formatPrice(priceRoom, "vi-VN", "VND")}
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-pt-48">
                            <div className="col-4">Thanh toán: </div>
                            <div className="col-8">
                              {data.booking.roomPayment === "N/A" &&
                                "Thanh Toán Sau"}
                            </div>
                          </div>
                          <div className="d-flex col-12 hs-py-24 hs-text-white text-lg justify-content-between">
                            <div className="col-4">Tổng: </div>
                            <div className="col-4">
                              {formatPrice(totalPrice, "vi-VN", "VND")}
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BookingConfirm;
