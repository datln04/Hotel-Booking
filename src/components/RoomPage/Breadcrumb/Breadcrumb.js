import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CONSTANT } from "../../../util/constant/settingSystem";
import Styles from "./Breadcrumb.module.scss";
export default function Breadcrumb({ image }) {
  const location = useLocation();
  const [namePage, setNamePage] = useState();
  const currentPath = location.pathname;

  useEffect(() => {
    let name = CONSTANT.NAV_ITEMS.map((item) => {
      if (item.link === currentPath) {
        return item.name;
      }
    });

    setNamePage(name);
  }, []);
  return (
    <div
      className={Styles.container}
      style={{ "--backgroundImage": `url(${image})` }}
    >
      <div className="hs-text-white hs-pt-96 hs-pb-8">
        <p className="text-xl">{namePage}</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="hs-text-dark-grey hs-pr-24">
          <p>{CONSTANT.NAV_ITEMS[0].name}</p>
        </div>
        <div className="hs-text-dark-grey">
          <p>/</p>
        </div>
        <div className="hs-text-white hs-pl-24">
          <p> {namePage}</p>
        </div>
      </div>
      <br />
      <div
        className={classNames(
          "col-12 d-flex justify-content-center hs-text-dark-grey text-sm"
        )}
      >
        <p className="col-8">{CONSTANT.ROOMTYPE.description}</p>
      </div>
    </div>
  );
}
