import classNames from "classnames";
import React, { useState } from "react";
import { formatPrice } from "../../../util/utilities/utils";
import Styles from "./AirPortShuttleService.module.scss";

const AirPortShuttleService = ({ airportShuttle, setCheckCb, checked }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classNames("col-12 d-flex hs-py-24", Styles.container)}>
      <div className="col-4">
        <img
          className="hs-px-24"
          src={airportShuttle.image[0].pictureUrl}
          alt={airportShuttle.image[0].pictureDescription}
        />
      </div>
      <div className="col-5 text-lg hs-text-white">
        <div className="">{airportShuttle.name}</div>
        <div
          className="button text-md hs-text-dark-brown"
          onClick={() => setOpen(!open)}
        >
          Chi tiết
        </div>
        {open && (
          <div className="text-md hs-text-dark-grey">
            {airportShuttle.description}
          </div>
        )}
        <div className="hs-pt-24">
          {formatPrice(airportShuttle.price, "vi-VN", "VND")}
        </div>
      </div>
      <div className="col-3 text-lg hs-text-dark-grey d-flex justify-content-center">
        <div className="col-6 text-center">Lựa chọn</div>
        <div className="col-4 hs-py-4">
          <input
            type="checkbox"
            checked={
              checked.checked && airportShuttle.id === checked.id ? true : false
            }
            onChange={(e) => setCheckCb(e, airportShuttle)}
          />
        </div>
      </div>
    </div>
  );
};

export default AirPortShuttleService;
