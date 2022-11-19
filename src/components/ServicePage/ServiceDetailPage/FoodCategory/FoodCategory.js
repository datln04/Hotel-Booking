import classNames from "classnames";
import React from "react";
import Styles from "../FoodCategory/FoodCategory.module.scss";
import FoodItem from "../FoodItem/FoodItem";
export default function FoodCategory({data}) {
  return (
    <div className={classNames("col-12 hs-bg-dark d-flex justify-content-center align-items-center hs-pt-32", Styles.FoodCategory)}>
      <div className={classNames("col-10 row")}>
        <FoodItem information={data}/>
      </div>
    </div>
  );
}
