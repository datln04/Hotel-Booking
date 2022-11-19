import classNames from "classnames";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { formatPrice, generateId } from "../../../util/utilities/utils";
import AirPortShuttleService from "../AirPortShuttleService/AirPortShuttleService";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import ListRoomAvailability from "../ListRoomAvailability/ListRoomAvailability";
import Styles from "./InfoRoomAvailability.module.scss";
import MomoImage from "../../../assets/images/momo.png";
import VNPayImage from "../../../assets/images/VNPay.png";
import { useDispatch, useSelector } from "react-redux";
import { PaymentWithVNPayState$ } from "../../../redux/selectors/PaymentSelector";
import * as paymentAction from "../../../redux/actions/PaymentAction";
import { Navigate, useNavigate } from "react-router-dom";

export default function RoomAvailability({
  count,
  arrayDate,
  airportShuttleList,
  specialUtilityList,
  hotelInfo,
  listRoomAvailability,
  roomSelect,
  setRoomSelect,
  tab,
  setTab,
}) {
  const [arrayChecked, setArrayChecked] = useState([]);
  const [arrayCheckedAirport, setArrayCheckedAirport] = useState({
    id: 0,
    checked: "",
  });
  const [check, setCheck] = useState("later");
  const [areaRequire, setAreaRequire] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const emailRef = useRef(null);
  const confirmEmailRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleClickRoom = (id, name, priceByDate, defaultPrice, isSelected) => {
    const price = priceByDate ? priceByDate.price : defaultPrice;
    const roomIndex = roomSelect.findIndex((room) => room.isSelected === false);
    if (roomSelect.length > 0 && roomIndex > -1) {
      const newArr = [...roomSelect];
      newArr[roomIndex] = { id, name, price, isSelected };
      setRoomSelect(newArr);
    } else {
      if (count.length > roomSelect.length) {
        setRoomSelect([...roomSelect, { id, name, price, isSelected }]);
      }
    }
  };

  const getTotalPrice = useCallback(() => {
    let price = 0;
    roomSelect.map((room) => (price += room.price));
    if (arrayCheckedAirport.id !== 0) {
      const airPortPrice = airportShuttleList.find(
        (airPort) => airPort.id === arrayCheckedAirport.id
      );
      price += airPortPrice.price;
    }
    setTotalPrice(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomSelect, arrayCheckedAirport]);

  const getCurrentRoomInfo = (index) => {
    return roomSelect.find((x, idx) => index === idx);
  };

  const handleContinuosClick = () => {
    if (tab !== 1 && tab < 3) {
      setTab(3);
    }
  };

  const handleOnChangeCheckbox = useCallback(
    (e, item) => {
      if (e.target.checked) {
        setArrayChecked([...arrayChecked, item]);
      } else {
        setArrayChecked((prev) =>
          prev.filter((currItem) => currItem.id !== item.id)
        );
      }
    },
    [arrayChecked]
  );

  const handleOnChangeCheckAirport = useCallback(
    (e, item) => {
      if (e.target.checked) {
        setArrayCheckedAirport({ id: item.id, checked: e.target.checked });
      } else {
        setArrayCheckedAirport({
          id: 0,
          checked: "",
        });
      }
    },
    [arrayCheckedAirport]
  );

  const handleMessageChange = useCallback(
    (event) => {
      setAreaRequire(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [areaRequire]
  );

  const handleBackButton = () => {
    if (tab === 2) {
      swal({
        title: "Are you sure?",
        text: "Are you sure to change date?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          setTab(1);
          setRoomSelect([]);
        }
      });
    }
    if (tab === 3) {
      setTab(2);
    }
  };

  const handleRemoveRoom = () => {
    if (roomSelect.length === 1) {
      setTab(1);
    }

    setRoomSelect(roomSelect.slice(0, -1));
  };

  useEffect(() => {
    if (roomSelect.length > count.length) {
      const gapItem = roomSelect.length - count.length;
      setRoomSelect(roomSelect.splice(0, roomSelect.length - gapItem));
    }
    if (roomSelect.length === count.length) {
      setTab(2);
    }
  }, [count, roomSelect]);

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  const dispatch = useDispatch();
  const payment = useSelector(PaymentWithVNPayState$);

  const handlePaymentMomo = () => {
    if (!acceptPolicy) {
      swal({
        title: "Announcement!",
        text: "You need to accept a policy to execute the payment",
        icon: "error",
        button: "Understand",
      });
    } else {
      // dispatch(
      //   paymentAction.getPaymentWithVNPay.getPaymentWithVNPayRequest({
      //     vnp_amount: totalPrice,
      //     vnp_IpAddr: "127.0.0.1",
      //     vnp_Locale: "vi",
      //     vnp_OrderInfo: "Payment",
      //   })
      // );
    }
  };

  useEffect(() => {
    if (payment && Object.keys(payment).length !== 0) {
      window.open(payment.url, "_blank");
      dispatch(paymentAction.getPaymentWithVNPay.removePaymentWithVNPay());
      navigate("/home");
    }
  }, [payment]);

  const handlePaymentVNPay = () => {
    if (!acceptPolicy) {
      swal({
        title: "Announcement!",
        text: "You need to accept a policy to execute the payment",
        icon: "error",
        button: "Understand",
      });
    } else {
      dispatch(
        paymentAction.getPaymentWithVNPay.getPaymentWithVNPayRequest({
          vnp_amount: totalPrice,
          vnp_IpAddr: "127.0.0.1",
          vnp_Locale: "vi",
          vnp_OrderInfo: "Payment",
        })
      );
    }
  };

  const handlePayment = () => {
    if (!acceptPolicy) {
      swal({
        title: "Announcement!",
        text: "You need to accept a policy to execute the payment",
        icon: "error",
        button: "Understand",
      });
    } else {
    }
  };

  return (
    <div className={classNames("hs-bg-dark col-12", Styles.RoomAvailability)}>
      <div
        className={classNames(
          "row hs-pt-32",
          tab !== 3 ? "col-8" : "col-12 d-flex justify-content-center"
        )}
      >
        <div className="col-12 col-md-9">
          {tab === 1 && (
            <>
              <div
                className={classNames("hs-text-white text-xl", Styles.Title1)}
              >
                Đặt phòng ngay để có mức giá ưu đãi nhất
              </div>
              <div
                className={classNames(
                  "hs-text-dark-grey text-md",
                  Styles.Title2
                )}
              >
                Quý khách sẽ được đặt phòng ở mức giá tốt nhất do không phải qua
                đơn vị trung gian. Quý khách đang ghé thăm trang web của khách
                sạn.
              </div>
              <ListRoomAvailability
                callBackFunc={handleClickRoom}
                data={listRoomAvailability}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <div
                className={classNames("hs-text-white text-xl", Styles.Title1)}
              >
                Chọn thêm dịch vụ bổ sung cho chuyến lưu trú trú của quý khách
              </div>
              <div
                className={classNames(
                  "hs-text-dark-grey text-md",
                  Styles.Title2
                )}
              >
                Quý khách sẽ được đặt phòng ở mức giá tốt nhất do không phải qua
                đơn vị trung gian. Quý khách đang ghé thăm trang web của khách
                sạn.
              </div>
              <div className="hs-mt-64 hs-py-8">
                <p
                  className=" button hs-px-16 text-md hs-text-white"
                  onClick={handleBackButton}
                >
                  <i className="fa-solid fa-arrow-left-long hs-pr-16"></i>
                  BACK
                </p>
              </div>
              <div className="hs-bg-dark-9 hs-mt-16">
                <div className="text-lg hs-text-dark-grey hs-p-8">
                  Lựa chọn bổ sung cho chuyến lưu trú của quý khách
                </div>
                {airportShuttleList &&
                  airportShuttleList.map((airport, index) => {
                    return (
                      <AirPortShuttleService
                        airportShuttle={airport}
                        key={index}
                        checked={arrayCheckedAirport}
                        setCheckCb={handleOnChangeCheckAirport}
                      />
                    );
                  })}
              </div>
              <div className="hs-bg-dark-9 hs-my-48">
                <div
                  className={classNames(
                    "text-lg hs-text-dark-grey hs-px-32 hs-py-8",
                    Styles.border
                  )}
                >
                  Hãy cho chúng tôi biết quý khách cần gì ?
                </div>
                <div className="col-12 container-fluid row hs-py-16">
                  {specialUtilityList &&
                    specialUtilityList.map((specialUtility, index) => {
                      if (specialUtility.status) {
                        return (
                          <>
                            <div key={index} className="d-flex col-6 hs-py-8">
                              <div className="col-1 hs-py-4">
                                <input
                                  type="checkbox"
                                  onChange={(e) =>
                                    handleOnChangeCheckbox(e, specialUtility)
                                  }
                                />
                              </div>
                              <div className="hs-px-16 col-11 text-lg hs-text-white">
                                {specialUtility.description}
                              </div>
                            </div>
                          </>
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
              <div className="hs-bg-dark-9 hs-my-48">
                <div
                  className={classNames(
                    "text-lg hs-text-dark-grey hs-px-32 hs-py-8",
                    Styles.border
                  )}
                >
                  Yêu cầu đặc biệt cho lựa chọn bổ sung của quý khách
                </div>
                <div className="col-12 hs-px-32 hs-py-16 text-md hs-text-white">
                  <div className="hs-py-16">
                    Vui lòng cung cấp thêm thông tin: thời gian đến, dị ứng đồ
                    ăn...
                  </div>
                  <div>
                    <textarea
                      className={classNames("col-12", Styles.textarea)}
                      onChange={(e) => handleMessageChange(e)}
                      value={areaRequire}
                    />
                  </div>
                  <div className="weight-300 hs-py-16">
                    Yêu cầu của quý khách sẽ được xem xét cẩn thận, chúng tôi sẽ
                    cố gắng hết sức để đáp ứng những yêu cầu đó.
                  </div>
                </div>
              </div>
            </>
          )}
          {tab === 3 && (
            <>
              <CustomerInfo
                hotel={hotelInfo}
                dateArray={arrayDate}
                roomSelect={roomSelect}
                count={count}
                backCb={handleBackButton}
                totalPrice={totalPrice}
                removeRoomCb={handleRemoveRoom}
                areaRequire={areaRequire}
                airSportList={airportShuttleList}
                arrayCheckedAirport={arrayCheckedAirport}
              />
              <div className="hs-bg-dark-9 hs-pb-48 hs-px-32 d-flex text-md hs-mb-32">
                <div className="col-5">
                  <div className="text-lg hs-text-white hs-py-24">
                    Thông Tin Khách
                  </div>
                  <div className="d-flex">
                    <div className="hs-text-dark-grey">Địa chỉ email </div>
                    <div className="hs-px-4 hs-text-solid-red text-sm">*</div>
                  </div>
                  <div className="hs-py-8">
                    <input
                      type="text"
                      className={Styles.TextContainer}
                      required={true}
                      ref={emailRef}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="hs-text-dark-grey">
                      Nhập Lại Địa chỉ email{" "}
                    </div>
                    <div className="hs-px-4 hs-text-solid-red text-sm">*</div>
                  </div>
                  <div className="hs-py-8">
                    <input
                      type="text"
                      className={Styles.TextContainer}
                      required={true}
                      ref={confirmEmailRef}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="hs-text-dark-grey">Họ và Tên</div>
                    <div className="hs-px-4 hs-text-solid-red text-sm">*</div>
                  </div>
                  <div className="hs-py-8">
                    <input
                      type="text"
                      className={Styles.TextContainer}
                      required={true}
                      ref={nameRef}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="hs-text-dark-grey">Số điện thoại </div>
                  </div>
                  <div className="hs-py-8">
                    <input
                      type="text"
                      className={Styles.TextContainer}
                      ref={phoneRef}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                </div>
                <div className="col-1 hs-my-32 hs-border-right-solid-dark"></div>
                <div className="col-6">
                  <div className="text-lg hs-text-white hs-py-24">
                    Thông tin thanh toán
                  </div>
                  <div className="d-flex text-md hs-text-white hs-pb-24">
                    <div className="d-flex ">
                      <input
                        className="hs-pr-16"
                        type="checkbox"
                        checked={check === "later" ? true : false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCheck("later");
                          }
                        }}
                      />
                      Thanh toán sau
                    </div>
                    <div className="d-flex hs-px-24">
                      <input
                        className="hs-px-16"
                        type="checkbox"
                        checked={check === "online" ? true : false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCheck("online");
                          }
                        }}
                      />
                      Thanh toán trực tuyến
                    </div>
                  </div>
                  {check === "online" && (
                    <div className="d-flex text-md hs-text-white hs-pb-16 col-12">
                      <input
                        type="checkbox"
                        className="col-auto"
                        checked={acceptPolicy}
                        onChange={(e) => setAcceptPolicy(e.target.checked)}
                      />
                      <span>
                        Khi lựa chọn đặt phòng, chúng tôi đã đồng ý và chấp nhận
                        khoản
                        <span className="hs-text-dark-brown hs-px-4">
                          chính sách bảo mật
                        </span>
                      </span>
                    </div>
                  )}
                  <div
                    className={classNames(
                      "d-flex",
                      Styles.payment,
                      check === "later" && Styles.overlay
                    )}
                  >
                    <img
                      className="hs-mr-32 button"
                      src={MomoImage}
                      alt="momo"
                      onClick={handlePaymentMomo}
                    />
                    <img
                      className="hs-mr-32 button"
                      src={VNPayImage}
                      alt="vnPay"
                      onClick={handlePaymentVNPay}
                    />
                  </div>
                </div>
              </div>
              {check === "later" && (
                <>
                  <div className="d-flex text-md hs-text-white hs-py-32 col-12">
                    <input
                      type="checkbox"
                      className="col-auto"
                      checked={acceptPolicy}
                      onChange={(e) => setAcceptPolicy(e.target.checked)}
                    />
                    <p>
                      Khi lựa chọn đặt phòng, chúng tôi đã đồng ý và chấp nhận
                      khoản
                    </p>
                    <p className="hs-text-dark-brown hs-px-4">
                      chính sách bảo mật
                    </p>
                  </div>
                  <div className="d-flex justify-content-center hs-pb-32">
                    <p
                      className="button hs-text-white text-center text-lg hs-bg-dark-brown w-25 hs-py-16"
                      onClick={handlePayment}
                    >
                      Đặt Phòng
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div
          className={classNames(
            "col-12 col-md-3 hs-text-white",
            Styles.OrderOfRoom,
            tab === 3 && "d-none"
          )}
        >
          {count.length > 0 &&
            count.map((person, index) => {
              const currentRoomInfo = getCurrentRoomInfo(index);
              return (
                <div
                  key={index}
                  className={classNames(
                    "hs-bg-dark-9 d-block container-fluid",
                    Styles.RoomIsChoose,
                    index > 0 ? "hs-mt-16" : ""
                  )}
                >
                  {currentRoomInfo ? (
                    <>
                      <div className="col-12 d-flex justify-content-between">
                        <div className="hs-py-16 text-lg">
                          {currentRoomInfo.isSelected
                            ? "Phòng " + (index + 1)
                            : "Chọn Phòng " + (index + 1)}
                        </div>
                        <div className={classNames("text-lg hs-py-16")}>
                          {currentRoomInfo.isSelected &&
                            formatPrice(currentRoomInfo.price, "vi-VN", "VND")}
                        </div>
                      </div>
                      {currentRoomInfo.isSelected && (
                        <>
                          <div className="col-12 hs-text-dark-grey text-md">
                            {currentRoomInfo.name}
                          </div>
                          <div className="col-12 hs-text-dark-grey hs-py-16">
                            {"Adult: " + person.adult}
                            {person.child > 0 ? ", child: " + person.child : ""}
                          </div>

                          {index < count.length - 1 && tab < 2 && (
                            <div className="col-12 d-flex justify-content-end hs-text-dark-brown hs-pb-8 ">
                              <p
                                className="button text-lg"
                                onClick={() => {
                                  let newArr = [...roomSelect];
                                  newArr[index].name = "";
                                  newArr[index].price = 0;
                                  newArr[index].isSelected = false;
                                  setRoomSelect(newArr);
                                }}
                              >
                                Bỏ
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="col-12  d-flex justify-content-between">
                        <div className="hs-py-16 text-lg">
                          {index === 0
                            ? "Chọn Phòng " + (index + 1)
                            : "Phòng " + (index + 1)}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          {arrayCheckedAirport.id !== 0 &&
            airportShuttleList.map((airSport, index) => {
              if (arrayCheckedAirport.id === airSport.id) {
                return (
                  <div
                    key={index}
                    className={classNames(
                      "hs-bg-dark-9 d-block container-fluid hs-mt-16",
                      Styles.RoomIsChoose
                    )}
                  >
                    <div className="col-12 d-flex justify-content-between">
                      <div className="hs-py-16 text-lg">Extras</div>
                      <div className={classNames("text-lg hs-py-16")}>
                        {formatPrice(airSport.price, "vi-VN", "VND")}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          <div
            className={classNames(
              "hs-bg-dark-9 hs-mt-16 d-flex col-12 justify-content-space-between hs-py-16",
              Styles.TotalPrice
            )}
          >
            <div className="col-3 hs-px-16 text-lg">Tổng</div>
            <div className="col-9 text-end hs-pr-16 text-lg">
              {totalPrice ? formatPrice(totalPrice, "vi-VN", "VND") : "0 đ"}
            </div>
          </div>
          <div
            className={classNames(
              "btn btn-primary hs-mt-16 hs-bg-dark-brown text-lg button",
              Styles.ContinueButton
            )}
            onClick={handleContinuosClick}
          >
            Tiếp
          </div>
        </div>
      </div>
    </div>
  );
}
