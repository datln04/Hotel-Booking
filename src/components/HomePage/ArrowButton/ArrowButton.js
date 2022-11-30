import classNames from "classnames";
import React from "react";
import Styles from "./ArrowButton.module.scss";
export default function ArrowButton() {
  return (
    <div className={classNames("container-fluid", Styles.arrowBtn)}>
      <div onClick={() => window.scrollTo(0, 0)}>
        <span className="fa-solid fa-angle-up"></span>
      </div>
    </div>
  );
}
