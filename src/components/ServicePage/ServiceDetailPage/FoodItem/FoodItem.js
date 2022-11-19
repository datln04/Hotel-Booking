import classNames from "classnames";
import React from "react";
import Styles from "../FoodItem/FoodItem.module.scss";
export default function FoodItem({ information }) {
  return (
    <div className={classNames(Styles.FoodItem)}>
      {information &&
        information.map((item, index) => {
          return (
            <div className={classNames(Styles.FoodItem)} key={index}>
              <div className={classNames("hs-text-white text-lg")}>
                {item.title}
              </div>
              <div className={classNames("hs-text-black-grey text-sm hs-pt-8")}>
                {item.description}
              </div>
              <div
                className={classNames(
                  "col-12 row d-flex hs-pt-32",
                  Styles.FoodItemdDetail
                )}
              >
                <div
                  className={classNames("col-12 col-md-3 hs-text-white d-block text-lg")}
                  key={index}
                >
                  {item.listFood &&
                    item.listFood.map((itemFood, index) => {
                      return (
                        <div className={classNames("d-flex hs-py-8")}>
                          
                          <p>{(index += 1)}.{itemFood.name}</p>
                          
                        </div>
                      );
                    })}
                </div>
                <div
                  className={classNames(
                    "col-12 col-md-9 d-flex justify-content-center align-items-center",
                    Styles.ImageFood
                  )}
                >
                  {item.imageFood &&
                    item.imageFood.map((imageItem, index) => {
                      return (
                        <div
                          className={classNames(
                            "col-6 hs-px-8",
                            Styles.ImageItem
                          )}
                        >
                          <img src={imageItem.imageItem} alt="" />
                        </div>
                      );
                    })}
                </div>
              </div>
              <hr
                className={classNames(
                  "hs-text-dark-brown hs-my-48",
                  Styles.hr1
                )}
              />
            </div>
          );
        })}
    </div>
  );
}
