import classNames from "classnames";
import moment from "moment";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../../../../util/constant/settingSystem";
import { checkDate } from "../../../../util/utilities/utils";
import Styles from "./FormValidate.module.scss";
export default function FormValidate() {
  const dateCheckInRef = useRef(null);
  const dateCheckOutRef = useRef(null);
  const [person, setPerson] = useState(1);
  const [children, setChildren] = useState(0);
  const navigate = useNavigate();
  const minDate = checkDate(new Date(), "yyyy-MM-DD");
  const nextDate = moment().add(1, "d").format("yyyy-MM-DD");

  const handleClick = () => {
    if (
      dateCheckInRef.current.value &&
      dateCheckOutRef.current.value &&
      person !== 0
    ) {
      navigate(`${CONSTANT.ROOM_VALIDATE}`, {
        state: {
          dateCheckIn: dateCheckInRef.current.value,
          dateCheckout: dateCheckOutRef.current.value,
          numOfPerson: person,
          numOfChild: children,
        },
      });
    } else {
      alert("Please input date to check in - checkout and person per a room");
    }
  };

  const renderAdult = () => {
    return (
      <select
        onChange={(e) => setPerson(e.target.value)}
        defaultValue={person}
        className={classNames(
          "hs-bg-dark hs-text-dark-grey",
          Styles.infoBookingDate
        )}
      >
        {Array.from(Array(4), (e, i) => {
          return (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          );
        })}
      </select>
    );
  };

  const renderChild = () => {
    return (
      <select
        onChange={(e) => setChildren(e.target.value)}
        defaultValue={children}
        className={classNames(
          "hs-bg-dark hs-text-dark-grey",
          Styles.infoBookingDate
        )}
      >
        {Array.from(Array(3), (e, i) => {
          return (
            <option value={i} key={i}>
              {i}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div
      className={classNames(
        "col-12 col-md-4 hs-text-white hs-pt-32",
        Styles.FormValidate
      )}
      id="fomrValidate"
    >
      <div className={classNames("hs-text-white")}>
        <p>Liên Hệ Đặt Phòng</p>
      </div>
      <div className={classNames("d-inline-block hs-pt-32")}>
        <div className={classNames("hs-text-white mb-3")}>
          <p>Ngày Đến</p>
          <input
            type="date"
            className={classNames(
              "hs-bg-dark-9 hs-text-dark-grey form-control",
              Styles.infoBookingDate
            )}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={minDate}
            min={minDate}
            ref={dateCheckInRef}
          />
        </div>
        <div className={classNames("hs-text-white mb-3")}>
          <p>Ngày Đi</p>
          <input
            type="date"
            className={classNames(
              "hs-bg-dark-9 hs-text-dark-grey form-control",
              Styles.infoBookingDate
            )}
            id="exampleInputPassword1"
            min={minDate}
            ref={dateCheckOutRef}
            name="name"
            defaultValue={nextDate}
          />
        </div>
        <div className={classNames("hs-text-white mb-3")}>
          <p>Số Người Lớn:</p>
          <div className="col-12 hs-py-8">{renderAdult()}</div>
          <p>Số Trẻ Em:</p>
          <div className="col-12 hs-py-8">{renderChild()}</div>
        </div>
        <div
          className={classNames(
            "hs-bg-maggie hs-text-white d-flex align-items-center justify-content-center",
            Styles.btnInfoBooking
          )}
          onClick={handleClick}
        >
          <p className="button"> Kiểm Tra Phòng Trống</p>
        </div>
      </div>
    </div>
  );
}
