import classNames from "classnames";
import React from "react";
import Styles from './ArrowButton.module.scss'
export default function ArrowButton() {
  return (
    <div className={classNames('container-fluid',Styles.arrowBtn)}>
      <a href="#">
        <span className="fa-solid fa-angle-up"></span>
      </a>
    </div>
  );
}
