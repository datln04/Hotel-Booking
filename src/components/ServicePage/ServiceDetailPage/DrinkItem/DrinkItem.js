import classNames from "classnames";
import React from "react";
import Styles from "../DrinkItem/DrinkItem.module.scss";
export default function DrinkItem({ dataDrink }) {
  return (
    <div className={classNames(Styles.DrinkItem)}>
      {dataDrink &&
        dataDrink.map((item, index) => {
          return (
            <div
              className={classNames("hs-pt-32", Styles.DrinkItem)}
              key={index}
            >
              <div
                className={classNames(
                  "col-12 row d-flex hs-pt-32",
                  Styles.DrinkItemdDetail
                )}
              >
                <div
                  className={classNames(
                    "col-12 col-md-6 hs-text-white d-block text-lg"
                  )}
                  key={index}
                >
                  <div className={classNames("hs-text-white text-xl")}>
                    {item.title}
                  </div>
                  <hr
                    className={classNames(
                      "hs-text-dark-brown hs-my-16",
                      Styles.hr1
                    )}
                  />
                  {item.listDrink &&
                    item.listDrink.map((itemFood, index) => {
                      return (
                        <div className={classNames("d-flex hs-py-8 text-lg")}>
                          {(index += 1)}.{itemFood.name}
                        </div>
                      );
                    })}
                </div>
                <div
                  className={classNames(
                    "col-12 col-md-6 d-flex justify-content-center align-items-center",
                    Styles.ImageDrink
                  )}
                >
                  <img src={item.imageDrink} alt="" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
