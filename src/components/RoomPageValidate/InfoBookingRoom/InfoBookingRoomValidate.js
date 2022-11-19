import classNames from "classnames";
import React from "react";
import { useState } from "react";
import SubRoomInfoBooking from "../SubRoomInfoBooking/SubRoomInfoBooking";
import Styles from "./InfoBookingRoomValidate.module.scss";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { useCallback } from "react";
import "./styles.css";
import swal from "sweetalert";

export default function InfoBookingRoomValidate({
  handleApplyRoomCb,
  arrayDate,
  setDateArray,
  numOfPerson,
  roomSelect,
  handleApplyDate,
}) {
  const [count, setCount] = useState([{ adult: numOfPerson, child: 0 }]);
  const [isOpen, setOpen] = useState(false);
  const [focusInput, setFocusInput] = useState(null);

  const handleAddMoreRoom = () => {
    setCount([...count, { adult: 1, child: 0 }]);
  };

  const handleSetDateRange = ({ startDate, endDate }) => {
    setDateArray({ startDate, endDate });
  };

  const handleFocusChange = (focusInput) => {
    setFocusInput(focusInput);
  };

  const handleSetAdultByIndex = (index, adult) => {
    setCount((count) =>
      count.map((person, i) => {
        if (i === index) {
          person.adult = adult;
          return person;
        } else {
          return person;
        }
      })
    );
  };

  const handleSetChildByIndex = (index, child) => {
    setCount((count) =>
      count.map((person, i) => {
        if (i === index) {
          person.child = child;
          return person;
        } else {
          return person;
        }
      })
    );
  };

  const renderDropdown = useCallback(() => {
    const tmp = count.map((person, index) => {
      return (
        <SubRoomInfoBooking
          key={index}
          index={index + 1}
          removeCallBackFunc={() => setCount(count.splice(0, count.length - 1))}
          lastItem={count.length}
          adult={person.adult}
          child={person.child}
          setAdultCb={handleSetAdultByIndex}
          setChildCb={handleSetChildByIndex}
          dateArray={arrayDate}
        />
      );
    });
    return tmp;
  }, [count]);

  const countPerson = () => {
    let adult = 0;
    let child = 0;
    count.map((person) => {
      adult += Number(person.adult);
      child += Number(person.child);
    });
    return { adult, child };
  };

  const totalPerson = countPerson();

  return (
    <div className={classNames("hs-bg-dark-9 col-12", Styles.InfoBookingRoom)}>
      <div
        className={classNames("col-8 row hs-py-32", Styles.InfoBookingRoomItem)}
      >
        <div className="col-6 d-flex justify-content-end hs-px-32 hs-border-right-dark-grey">
          <i className="fa-solid fa-calendar-days hs-text-dark-brown text-lg"></i>
          <DateRangePicker
            endDate={arrayDate.endDate}
            endDateId="endDate"
            focusedInput={focusInput}
            isOutsideRange={() => null}
            onDatesChange={handleSetDateRange}
            onFocusChange={handleFocusChange}
            startDate={arrayDate.startDate}
            startDateId="startDate"
            hideKeyboardShortcutsPanel={true}
            minimumNights={1}
          />
          <i className="fa-solid fa-sort-down hs-text-dark-grey text-lg"></i>
        </div>
        <div className="col-6 hs-px-32">
          <div
            className={classNames(
              " d-flex align-items-center text-lg ",
              Styles.infoRoom
            )}
            onClick={() => setOpen(!isOpen)}
          >
            <i className="fa-solid fa-users hs-text-dark-brown"></i>
            <div className="hs-text-white hs-px-16">
              <p>
                {count.length + " "}
                phòng,
                {" " + totalPerson.adult + " "}
                người lớn
                {totalPerson.child > 0 && ", " + totalPerson.child + " trẻ em"}
              </p>
            </div>
            <i className="fa-solid fa-sort-down hs-text-dark-grey hs-px-16"></i>
          </div>
          {isOpen && (
            <div
              className={classNames(
                "hs-bg-dark-9 hs-mt-32 col-3",
                Styles.overlayContainer
              )}
            >
              <div className="d-flex hs-text-dark-grey text-md hs-p-16">
                <p>Tối đa 6 người một phòng </p>
                <div>
                  <i className="hs-px-16 fa-solid fa-circle-info "></i>
                </div>
              </div>
              {renderDropdown()}
              <div
                className={classNames(
                  "hs-m-16",
                  Styles.roomButtonAdd,
                  count.length === 3 && "d-none"
                )}
              >
                <div
                  className={classNames(
                    "hs-py-8 hs-px-16 hs-bg-dark-9 hs-text-dark-brown text-center button"
                  )}
                  onClick={handleAddMoreRoom}
                >
                  + Thêm phòng
                </div>
              </div>
              <div
                className={classNames(
                  "d-flex justify-content-end hs-px-32 hs-pb-32",
                  count.length === 3 && "hs-py-24"
                )}
              >
                <div
                  className={classNames(
                    "hs-text-dark-brown text-center hs-px-32 d-flex align-item-center button"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <p>Hủy</p>
                </div>
                <div
                  className={classNames(
                    "col-4 hs-p-4 hs-bg-dark-brown hs-text-white text-center button"
                  )}
                  onClick={() => {
                    setOpen(false);
                    handleApplyRoomCb(count);
                  }}
                >
                  Áp dụng
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
