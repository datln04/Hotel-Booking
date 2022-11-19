import classNames from "classnames";
import React from "react";
import Styles from "../MenuOverview/MenuOverview.module.scss";
export default function MenuOverview({ data }) {
  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center",
        Styles.MenuOverview
      )}
    >
      <div className={classNames("col-9 row")}>
        <div className={classNames("hs-text-white")}>
          <p className="text-xl text-center">
            Những thực đơn đươc các khách hàng ưu chuộng
          </p>
        </div>
        {/* <hr className={classNames("hs-text-dark-brown hs-mt-32", Styles.hr1)} /> */}
        <div className="col-12 row hs-py-64">
          {data &&
            data.map((item, index) => {
              if (index === 0) {
                return (
                  <div className="col-12 col-md-4">
                    <div className={classNames("hs-text-light-yellow")}>
                      <p className="text-lg">Thực đơn số {(index += 1)}</p>
                    </div>
                     <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr2)} />
                    <div className={classNames("d-block")}>
                      {item.listFood &&
                        item.listFood.map((itemFood, index) => {
                          return (
                            <div
                              className={classNames("hs-text-grey hs-pt-8 text-lg")}
                            >
                              {itemFood.name}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }else if (index === 1){
                return (
                  <div className="col-12 col-md-5">
                    <div className={classNames("hs-text-light-yellow")}>
                      <p className="text-lg">Thực đơn số {(index += 1)}</p>
                    </div>
                    <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr2)} />
                    <div className={classNames("d-block")}>
                      {item.listFood &&
                        item.listFood.map((itemFood, index) => {
                          return (
                            <div
                              className={classNames("hs-text-grey hs-pt-8 text-lg")}
                            >
                              {itemFood.name}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }
              else{
                return (
                  <div className="col-12 col-md-3">
                    <div className={classNames("hs-text-light-yellow")}>
                      <p className="text-lg">Thực đơn số {(index += 1)}</p>
                    </div>
                    <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr2)} />
                    <div className={classNames("d-block")}>
                      {item.listFood &&
                        item.listFood.map((itemFood, index) => {
                          return (
                            <div
                              className={classNames("hs-text-grey hs-pt-8 text-lg")}
                            >
                              {itemFood.name}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
