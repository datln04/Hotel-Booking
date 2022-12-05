import classNames from "classnames";
import React from "react";
import { useRef } from "react";
import FormValidate from "../FormValidate/FormValidate";
import ImageOfRoomType from "../ImageOfRoomType/ImageOfRoomType";
import InformationDetail from "../InformationDetail/InformationDetail";
import ServiceRoom from "../ServiceRoom/ServiceRoom";
import Styles from "./InformationOfRoomType.module.scss";
export default function InformationOfRoomType({ roomType, hotelInfo }) {
  const benefitRef = useRef();
  const imageRelevantRef = useRef();

  return (
    <>
      <div className={classNames("col-12 hs-bg-dark", Styles.gainContainer)}>
        <div
          className={classNames(
            "d-flex justify-content-center align-items-center hs-pt-32",
            Styles.SectionTitle
          )}
        >
          <div
            className={classNames(
              "text-sm hs-text-dark-grey hs-px-32",
              Styles.SectionTitleItem
            )}
          >
            <div className="button" onClick={() => window.scrollTo(0, 0)}>
              Tổng Quan
            </div>
            <hr
              className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
            />
          </div>
          <div
            className={classNames(
              "text-sm hs-text-dark-grey hs-px-32",
              Styles.SectionTitleItem
            )}
          >
            <div
              className="button"
              onClick={() => {
                if (benefitRef.current) {
                  window.scrollTo(0, benefitRef.current?.offsetHeight);
                }
              }}
            >
              Tiện Ích
            </div>
            <hr
              className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
            />
          </div>
          <div
            className={classNames(
              "text-sm hs-text-dark-grey hs-px-32",
              Styles.SectionTitleItem
            )}
          >
            <div
              className="button"
              onClick={() => {
                if (imageRelevantRef.current) {
                  window.scrollTo(0, imageRelevantRef.current?.offsetHeight);
                }
              }}
            >
              Hình Ảnh
            </div>
            <hr
              className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
            />
          </div>
        </div>
        <div
          className={classNames(
            "col-12 d-flex justify-content-center align-items-center"
          )}
        >
          <div className={classNames("col-md-10 row")}>
            <InformationDetail roomType={roomType} hotelInfo={hotelInfo} />
            <FormValidate />
            <ServiceRoom roomType={roomType} benefitRef={benefitRef} />
          </div>
        </div>
      </div>
      <ImageOfRoomType
        roomType={roomType}
        imageRelevantRef={imageRelevantRef}
      />
    </>
  );
}
