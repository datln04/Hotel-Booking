import classNames from "classnames";
import React from "react";
import { CONSTANT } from "../../../../util/constant/settingSystem";
import Styles from "./Breadcrumb.module.scss";
export default function Breadcrumb({ image }) {
  return (
    <div
      className={classNames(
        "align-items-center",
        Styles.container
      )}
      style={{ "--backgroundImage": `url(${image})` }}
    >
      <div className="hs-text-white hs-pt-96 hs-pb-8">
        <p className="text-xl">Standard Room</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="hs-text-dark-grey hs-pr-24">
          <p>{CONSTANT.NAV_ITEMS[0].name}</p>
        </div>
        <div className="hs-text-dark-grey">
          <p>/</p>
        </div>
        <div className="hs-text-white hs-pl-24">
          <p> StandardRoom</p>
        </div>
      </div>
    </div>
  );
}
