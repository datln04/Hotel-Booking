import classNames from "classnames";
import React from "react";
import { filterUtilities } from "../../../../util/utilities/utils";
import Styles from "./ServiceRoom.module.scss";
export default function ServiceRoom({ roomType, benefitRef }) {
  return (
    <div
      ref={benefitRef}
      className={classNames("col-12 col-md-8 hs-py-72 align-items-center")}
    >
      <div className={classNames("hs-text-white text-xl")}>
        <p>Tiện Ích</p>
      </div>
      <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)} />
      <div className="col-12 d-flex row hs-pt-16">
        {roomType.utilities.map((utility, idx) => {
          const icon = filterUtilities(utility);
          const Source = icon.src;
          return (
            <div key={idx} className="col-6 hs-py-8">
              <div className="d-flex text-md hs-text-dark-grey align-items-center">
                {icon && typeof Source === "string" ? (
                  <div>
                    <i
                      className={classNames(
                        "hs-pr-16 hs-text-dark-brown",
                        Source
                      )}
                    ></i>
                    {icon.name}
                  </div>
                ) : (
                  <div className="d-flex">
                    <div
                      className={classNames(
                        "hs-pr-16 hs-text-dark-brown",
                        Styles.iconImage
                      )}
                    >
                      <Source />
                    </div>
                    {icon.name}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
