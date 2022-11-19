import classNames from "classnames";
import React from "react";
import Styles from './FormValidate.module.scss'
export default function FormValidate() {
  return (
    <div className={classNames("col-12 col-md-4 hs-text-white hs-pt-32",Styles.FormValidate)} id="fomrValidate">
      <div className={classNames("hs-text-white")}>
        <p>Liên Hệ Đặt Phòng</p>
      </div>
      <form className={classNames('d-inline-block hs-pt-32')}>
        <div className={classNames("hs-text-white mb-3")}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ngày Đến
          </label>
          <input
            type="date"
            className={classNames('hs-bg-dark-9 hs-text-dark-grey form-control', Styles.infoBookingDate)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={classNames("hs-text-white mb-3")}>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ngày Đi
          </label>
          <input
            type="date"
            className={classNames('hs-bg-dark-9 hs-text-dark-grey form-control', Styles.infoBookingDate)}
            id="exampleInputPassword1"
          />
        </div>
        <div className={classNames("hs-text-white mb-3")}>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Số Người
          </label>
          <input
            type="date"
            className={classNames('hs-bg-dark-9 hs-text-dark-grey form-control', Styles.infoBookingDate)}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className={classNames('hs-bg-maggie hs-text-white', Styles.btnInfoBooking)}>
          Kiểm Tra Phòng Trống
        </button>
      </form>
    </div>
  );
}
