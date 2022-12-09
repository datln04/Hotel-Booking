/* eslint-disable array-callback-return */
import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { HotelByIdState$ } from "../../../redux/selectors/HotelServiceSelector";
import {
  checkDate,
  filterUtilities,
  formatPrice,
} from "../../../util/utilities/utils";
import Styles from "../RoomAvailability/RoomAvailability.module.scss";
import RoomPlaceHolder from "./../../../assets/images/fallbackImage.png";
import "./RoomDetailSlider.css";

export default function RoomAvailability({ data, callBackFunc }) {
  const [openModel, setOpenModel] = useState(false);
  const [roomInModel, setRoomInModel] = useState({});
  const hotelInfo = useSelector(HotelByIdState$);

  const handleOpenDetailRoom = (room) => {
    setOpenModel(true);
    setRoomInModel(room);
  };

  const handleCloseOverlay = () => {
    setOpenModel(false);
    setRoomInModel({});
  };

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div
        {...props}
        className="custom-prevArrow d-none d-lg-flex"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };

  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div className="custom-nextArrow d-none d-lg-flex" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const GalleryPrevArrowBig = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div
        {...props}
        className="custom-prevArrow-big d-none d-lg-flex"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };

  const GalleryNextArrowBig = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div className="custom-nextArrow-big d-none d-lg-flex" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const thumbnailSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsBigScreen = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    nextArrow: <GalleryNextArrowBig />,
    prevArrow: <GalleryPrevArrowBig />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Room = (obj) => {
    const priceOfRoom = obj.roomPrices.find((roomPrice) => {
      return checkDate(new Date(), "DD/MM/YYYY") === roomPrice.date;
    });

    return (
      <div className="hs-bg-dark-9 hs-mb-64 col-11">
        <div className="hs-text-white text-lg hs-p-8">{obj.name}</div>
        <div className={Styles.ImageOfRoomAvailability}>
          {obj?.images ? (
            <Slider {...settingsBigScreen}>
              {obj?.images.map((image) => {
                return (
                  <img src={image.pictureUrl} alt={image.pictureDescription} />
                );
              })}
            </Slider>
          ) : (
            <img src={RoomPlaceHolder} alt="Default_Image" />
          )}
        </div>
        <div className="d-flex col-12 justify-content-center">
          <div className="col-11 d-flex">
            <div className="col-6 text-lg hs-text-dark-brown d-flex align-items-center">
              <i className="fa-solid fa-bed hs-py-16 hs-pr-16"></i>
              {obj.bedType}
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div
                className="hs-text-dark-brown text-lg hs-py-16 button weight-300"
                onClick={() => handleOpenDetailRoom(obj)}
              >
                Chi tiết và ảnh phòng
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className={classNames("col-11", Styles.hr)}></div>
        </div>
        <div className="d-flex col-12 justify-content-center">
          <div className="col-10 d-flex">
            <div className="col-10 d-flex row align-items-center hs-py-24 hs-mr-8">
              {obj.utilities.length > 0 &&
                obj.utilities.map((utility, idx) => {
                  const icon = filterUtilities(utility);
                  const Source = icon.src;
                  return (
                    <div key={idx} className="col-6 hs-py-8">
                      <div className="d-flex text-lg hs-text-white-6 align-items-center">
                        {icon && typeof Source === "string" ? (
                          <div>
                            <i className={classNames("hs-pr-16", Source)}></i>
                            {icon.name}
                          </div>
                        ) : (
                          <div className="d-flex">
                            <div className="hs-pr-16">
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
            <div className="col-auto d-flex row hs-py-16">
              <div className="hs-text-white-6 text-md">
                1 đêm, {obj.maxAdult} người
              </div>
              <div className="hs-text-white text-lg">
                {priceOfRoom
                  ? formatPrice(priceOfRoom.price, "vi-VN", "VND")
                  : formatPrice(obj.defaultPrice, "vi-VN", "VND")}
              </div>
              <div
                className={classNames(
                  "col-5 hs-bg-dark-brown hs-text-white text-lg text-center button d-flex align-items-center justify-content-center"
                )}
                onClick={() =>
                  callBackFunc(
                    obj.id,
                    obj.name,
                    priceOfRoom,
                    obj.defaultPrice,
                    true
                  )
                }
              >
                Chọn
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames("col-11", Styles.RoomAvailability)}>
      {data &&
        data.map((item, index) => {
          if (item.maxBookingRoom > 0) {
            return (
              <div key={index} className={classNames("hs-mt-64")}>
                {Room(item)}
              </div>
            );
          }
        })}
      {openModel && Object.keys(roomInModel).length !== 0 && (
        <div className={Styles.popUpContainer}>
          <div className={classNames("hs-bg-dark-9", Styles.popUpInner)}>
            <div
              className={Styles.popUpButton}
              onClick={() => handleCloseOverlay()}
            >
              <i className="fa-solid fa-xmark button hs-text-dark-brown text-lg"></i>
            </div>
            <div className="container-fluid col-12 d-flex hs-pt-8">
              <div className="col-7 hs-pt-24 hs-pl-16">
                <Slider {...settings}>
                  {roomInModel.images.map((image) => {
                    return (
                      <img
                        className={classNames("img", Styles.mainImage)}
                        src={image.pictureUrl}
                        alt={image.pictureDescription}
                      />
                    );
                  })}
                </Slider>
                <div className="thumbnail-slider-wrap container-fluid">
                  <Slider {...thumbnailSettings}>
                    {roomInModel.images.map((image) => {
                      return (
                        <img
                          className={classNames(
                            "img button",
                            Styles.thumbnailImage
                          )}
                          src={image.pictureUrl}
                          alt={image.pictureDescription}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </div>
              <div className="col-5 hs-pt-24 hs-pr-16">
                <p className="hs-text-white text-lg">{roomInModel.name}</p>
                <p className="hs-text-dark-grey text-md w-50 hs-border-bottom-white hs-py-8">
                  Tổng quan
                </p>
                <div className="col-12 d-flex row hs-pt-16">
                  <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
                    <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-right-to-bracket"></i>
                    <p className="text-md hs-text-dark-grey">
                      Nhận phòng: {hotelInfo.checkInTime}
                    </p>
                  </div>
                  <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
                    <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-right-from-bracket"></i>
                    <p className="text-md hs-text-dark-grey">
                      Trả phòng: {hotelInfo.checkOutTime}
                    </p>
                  </div>
                  <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
                    <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-utensils"></i>
                    <p className="text-md hs-text-dark-grey">Buffet sáng</p>
                  </div>
                  <div className="col-6 text-lg d-flex hs-py-16 align-items-center">
                    <i className="hs-text-dark-brown hs-mr-16 fa-solid fa-bed"></i>
                    <p className="text-md hs-text-dark-grey">
                      {roomInModel.bedType}
                    </p>
                  </div>
                </div>
                <p className="hs-text-dark-grey text-md w-50 hs-border-bottom-white hs-py-16">
                  Tiện ích
                </p>
                <div className="col-12 d-flex row hs-pt-16">
                  {roomInModel.utilities.map((utility, idx) => {
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
