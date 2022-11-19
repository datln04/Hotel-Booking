import React from "react";
import Styles from "../Loading/Loading.module.scss"
import { useSelector } from "react-redux";
import { loadingState$ } from "../../redux/selectors/LoadingSelector";
import classNames from "classnames";
export default function Loading() {
  let isLoading = useSelector(loadingState$);
  if (isLoading) {
    return (
      <div className={classNames(Styles.bgLoading)}>
        <img src="../../assets/img/loading11.gif" />
      </div>
    );
  } else {
    return "";
  }
}
