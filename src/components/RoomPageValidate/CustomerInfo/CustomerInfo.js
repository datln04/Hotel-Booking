import classNames from "classnames";
import React from "react";
import Styles from "./CustomerInfo.module.scss";
import vi from "moment/locale/vi";
import { formatPrice } from "../../../util/utilities/utils";
import moment from "moment";

const CustomerInfo = ({
  hotel,
  dateArray,
  roomSelect,
  count,
  backCb,
  totalPrice,
  removeRoomCb,
  areaRequire,
  airSportList,
  arrayCheckedAirport,
}) => {
  const getPersonByIndex = (index) => {
    const person = count.find((p, idx) => index === idx);
    return person;
  };

  return (
    <>
      <div className="hs-my-16 hs-py-8">
        <p
          className=" hs-bg-grey-6 button hs-px-16 text-md hs-text-white"
          onClick={backCb}
        >
          <i className="fa-solid fa-arrow-left-long hs-pr-16"></i>
          BACK
        </p>
      </div>
      <div
        className={classNames(
          "col-10 hs-bg-dark-9 text-lg hs-text-white",
          Styles.customerInfoContainer
        )}
      >
        <div className="hs-py-16 hs-px-32 hs-text-dark-grey">
          Đặt phòng của quý khách - từ{" "}
          {moment(dateArray.startDate).locale("vi", vi).format("DD MMMM YYYY")}{" "}
          đến{" "}
          {moment(dateArray.endDate).locale("vi", vi).format("DD MMMM YYYY")}
        </div>
        <div className="hs-bg-grey-6 col-12 hs-py-16 hs-px-32 hs-text-dark-grey">
          <div className="hs-text-white">{hotel.fullName}</div>
          <div className="col-12 d-flex">
            <div className="col-4 weight-300">
              <div className="hs-py-8">Địa chỉ</div>
              <div className="hs-py-8">Lễ tân đang làm việc</div>
              <div className="hs-py-8">Nhận phòng từ</div>
              <div className="hs-py-8">Trả phòng trước</div>
              <div className="hs-py-8">Liên hệ</div>
              <div className="hs-py-8">Trang web</div>
            </div>
            <div className="col-8 weight-300 hs-text-white">
              <div className="hs-py-8"> {hotel.address}</div>
              <div className="hs-py-8">24/7</div>
              <div className="hs-py-8">{hotel.checkInTime}</div>
              <div className="hs-py-8">{hotel.checkOutTime}</div>
              <div className="hs-py-8">{hotel.phoneNumber}</div>
              <div className="hs-py-8">{hotel.website}</div>
            </div>
          </div>
        </div>
        <div className="hs-bg-grey-6 col-12 hs-py-16 hs-px-48 d-flex hs-border-top-solid-dark">
          <div className="col-7">
            {roomSelect &&
              roomSelect.map((room, index) => {
                const person = getPersonByIndex(index);
                return (
                  <div
                    key={index}
                    className={classNames(
                      index > 0 && "hs-border-top-solid-dark"
                    )}
                  >
                    <div className="col-12 d-flex justify-content-between">
                      <div className="hs-py-16 text-lg">
                        {"Phòng " + (index + 1)}
                      </div>
                      <div className={classNames("text-lg hs-py-16")}>
                        {formatPrice(room.price, "vi-VN", "VND")}
                      </div>
                    </div>
                    <div className="col-12 hs-text-dark-grey text-md">
                      {room.name}
                    </div>
                    <div className="col-12 hs-text-dark-grey text-md">
                      {person.adult + " người lớn"}
                      {person.child > 0 ? person.child + " trẻ em" : ""}
                      <div className=" hs-py-16 hs-text-dark-brown">
                        {index + 1 === roomSelect.length && (
                          <p className="button text-lg" onClick={removeRoomCb}>
                            Bỏ
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            {airSportList &&
              airSportList.map((airSport, index) => {
                if (arrayCheckedAirport.id === airSport.id) {
                  return (
                    <div
                      key={index}
                      className={classNames(
                        index > 0 && "hs-border-top-solid-dark ",
                        "hs-py-32"
                      )}
                    >
                      <div className="col-12 d-flex justify-content-between">
                        <div className="hs-py-16 text-lg">{airSport.name}</div>
                        <div className={classNames("text-lg hs-py-16")}>
                          {formatPrice(airSport.price, "vi-VN", "VND")}
                        </div>
                      </div>
                      <div className="col-12 hs-text-dark-grey text-md">
                        {airSport.description}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            <div className="col-12 d-flex justify-content-between hs-border-top-solid-dark">
              <div className="hs-py-16 text-lg">Tổng</div>
              <div className={classNames("text-lg hs-py-16")}>
                {formatPrice(totalPrice, "vi-VN", "VND")}
              </div>
            </div>
          </div>
          <div className="col-1 hs-border-right-solid-dark"></div>
          <div className="col-4 container-fluid hs-text-dark-brown">
            <div className="col-12 d-block text-center hs-py-24">
              <i className="fa-solid fa-utensils"></i>
              <div className="hs-py-8 hs-text-dark-grey">Buffet sáng</div>
            </div>
            <div className="col-12 d-block text-center hs-py-24">
              <i className="fa-solid fa-xmark"></i>
              <div className="hs-py-8 hs-text-dark-grey">
                Không thể hủy và thay đổi
              </div>
            </div>
            <div className="col-12 d-block text-center hs-py-24">
              <i className="fa-solid fa-wallet"></i>
              <div className="hs-py-8 hs-text-dark-grey">Thanh toán sau</div>
            </div>
          </div>
        </div>
        <div className="hs-bg-grey-6 hs-py-16 hs-px-32">
          <div
            className={classNames(
              "text-lg hs-text-dark-grey hs-py-8",
              Styles.border
            )}
          >
            Yêu cầu đặc biệt cho lựa chọn bổ sung của quý khách
          </div>
          <div className="col-12 hs-py-16 text-md hs-text-white">
            <div className="hs-py-16">
              Vui lòng cung cấp thêm thông tin: thời gian đến, dị ứng đồ ăn...
            </div>
            <div>
              <textarea
                className={classNames("col-12", Styles.textarea)}
                value={areaRequire}
                readOnly={true}
              />
            </div>
            <div className="weight-300 hs-py-8">
              Yêu cầu của quý khách sẽ được xem xét cẩn thận, chúng tôi sẽ cố
              gắng hết sức để đáp ứng những yêu cầu đó.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
