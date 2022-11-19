import classNames from "classnames";
import { useState } from "react";
import { useRef } from "react";
import Styles from "./InfoBookingRoom.module.scss";
import { useNavigate } from "react-router-dom";
import { checkDate } from "../../../util/utilities/utils";
import moment from "moment/moment";
import { CONSTANT } from "../../../util/constant/settingSystem";

const InfoBookingRoom = () => {
  const dateCheckInRef = useRef(null);
  const dateCheckOutRef = useRef(null);
  const [person, setPerson] = useState(1);
  const navigate = useNavigate();
  const minDate = checkDate(new Date(), "yyyy-MM-DD");
  const nextDate = moment().add(1, "d").format("yyyy-MM-DD");

  const renderDropdownPerson = () => {
    return (
      <select
        onChange={(e) => setPerson(e.target.value)}
        defaultValue={person}
        className={classNames(
          "hs-bg-dark hs-text-dark-grey",
          Styles.infoBookingDate
        )}
      >
        {Array.from(Array(6), (e, i) => {
          return (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          );
        })}
      </select>
    );
  };

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
        },
      });
    } else {
      alert("Please input date to check in - checkout and person per a room");
    }
  };

  return (
    <div className="hs-bg-dark">
      <div className="container-fluid hs-py-32">
        <div className={classNames("col-12 row", Styles.infoContainer)}>
          <div
            className={classNames(
              "col-12 col-lg-8 d-md-flex d-block",
              Styles.subContainer
            )}
          >
            <div
              className={classNames(
                "hs-text-white col-md-3 col-12",
                Styles.infoBooking
              )}
            >
              <p>Ngày đến:</p>
              <div className="col-12 hs-py-8">
                <input
                  className={classNames(
                    "hs-bg-dark hs-text-dark-grey",
                    Styles.infoBookingDate
                  )}
                  min={minDate}
                  ref={dateCheckInRef}
                  name="name"
                  type="date"
                  defaultValue={minDate}
                />
              </div>
            </div>
            <div
              className={classNames(
                "hs-text-white col-md-3 col-12",
                Styles.infoBooking
              )}
            >
              <p>Ngày đi:</p>
              <div className=" col-12 hs-py-8">
                <input
                  className={classNames(
                    "hs-bg-dark hs-text-dark-grey",
                    Styles.infoBookingDate
                  )}
                  min={minDate}
                  ref={dateCheckOutRef}
                  name="name"
                  type="date"
                  defaultValue={nextDate}
                />
              </div>
            </div>
            <div
              className={classNames(
                "hs-text-white col-md-3 col-12",
                Styles.infoBooking
              )}
            >
              <p>Số Người:</p>
              <div className="col-12 hs-py-8">{renderDropdownPerson()}</div>
            </div>
            <div
              className={classNames(
                "hs-text-white col-lg-4 col-md-3 col-12",
                Styles.infoBooking
              )}
            >
              <p className="d-md-block invisible d-none">hành động</p>
              <div className="col-12 hs-py-8">
                <button
                  className={classNames(
                    "hs-bg-maggie hs-text-white",
                    Styles.btnInfoBooking
                  )}
                  onClick={handleClick}
                >
                  Kiểm tra phòng trống
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBookingRoom;
