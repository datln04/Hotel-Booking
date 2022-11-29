import classNames from "classnames";
import React from "react";
import Styles from "../ServiceItem/ServiceItem.module.scss";

import { useNavigate } from "react-router-dom";
export default function ServiceItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "col-6 hs-text-white hs-p-16 button",
        Styles.ServiceItem
      )}
    >
      <div onClick={() => navigate("/serviceDetail", { state: item.id })}>
        <div className={classNames(Styles.ImageService)}>
          <img src={item.images[0].pictureUrl} alt="#" />
        </div>
        <div
          className={classNames(
            "hs-text-white hs-bg-dark",
            Styles.TitleService
          )}
        >
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
