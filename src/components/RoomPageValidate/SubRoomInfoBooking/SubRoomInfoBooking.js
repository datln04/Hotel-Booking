import classNames from "classnames";
import { useState } from "react";
import Styles from "./SubRoomInfoBooking.module.scss";

const SubRoomInfoBooking = ({
  index,
  removeCallBackFunc,
  lastItem,
  adult,
  child,
  setAdultCb,
  setChildCb,
}) => {
  const [isOpenDropdownAdult, setOpenDropdownAdult] = useState(false);
  const [isOpenDropdownChild, setOpenDropdownChild] = useState(false);

  return (
    <div className={classNames("text-lg hs-px-16")}>
      {index > 1 && (
        <div className="d-flex justify-content-center hs-p-16">
          <div className={Styles.subRoomInfoContainer}></div>
        </div>
      )}
      <div className="col-12 hs-py-16 hs-text-dark-brown d-flex justify-content-between">
        <div className={classNames("", Styles.roomTitle)}>Phòng {index}</div>
        {index === lastItem && index !== 1 && (
          <p
            className={classNames("text-lg", Styles.button)}
            onClick={() => removeCallBackFunc()}
          >
            Xoá
          </p>
        )}
      </div>
      <div
        className="d-flex text-white col-9 justify-content-between"
        onMouseLeave={() => setOpenDropdownAdult(false)}
      >
        <div>Người lớn</div>
        <div
          className={classNames(" col-4", Styles.roomDropdown)}
          onClick={() => setOpenDropdownAdult(!isOpenDropdownAdult)}
        >
          <div className="d-flex justify-content-between">
            <div className="col-8 text-center">{adult}</div>
            <div className="col-4 hs-bg-dark-brown">
              <i className="hs-text-white text-md fa-solid fa-chevron-down"></i>
            </div>
          </div>
          {isOpenDropdownAdult && (
            <div className={Styles.dropdownContainer}>
              {Array.from(Array(4), (e, i) => {
                return (
                  <div
                    key={i}
                    className={classNames("col-12", Styles.subDropdown)}
                    onClick={() => setAdultCb(index - 1, i + 1)}
                  >
                    <div className="col-8 text-center">{i + 1}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div
        className="d-flex text-white col-9 justify-content-between hs-py-16"
        onMouseLeave={() => setOpenDropdownChild(false)}
      >
        <div>
          Trẻ em{" "}
          <p className="text-xs hs-text-white-6 hs-p-0">&#8804; 11 tuổi</p>
        </div>
        <div
          className={classNames("col-4", Styles.roomDropdown)}
          onClick={() => setOpenDropdownChild(!isOpenDropdownChild)}
        >
          <div className="d-flex justify-content-between">
            <div className="col-8 text-center">{child}</div>
            <div className="col-4 hs-bg-dark-brown">
              <i className="hs-text-white text-md fa-solid fa-chevron-down"></i>
            </div>
          </div>
          {isOpenDropdownChild && (
            <div className={Styles.dropdownContainer}>
              {Array.from(Array(3), (e, i) => {
                return (
                  <div
                    key={i}
                    className={classNames("col-12", Styles.subDropdown)}
                    onClick={() => setChildCb(index - 1, i)}
                  >
                    <div className="col-8 text-center">{i}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubRoomInfoBooking;
