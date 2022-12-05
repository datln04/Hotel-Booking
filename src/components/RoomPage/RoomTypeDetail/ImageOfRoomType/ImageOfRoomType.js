import classNames from "classnames";
import React from "react";
import Slider from "react-slick";
import Styles from "./ImageOfRoomType.module.scss";
export default function ImageOfRoomType({ roomType, imageRelevantRef }) {
  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <div
      className={classNames(
        " d-block col-12 hs-bg-dark-9 text-center hs-pt-32 hs-pb-32",
        Styles.ImageOfRoomType
      )}
      ref={imageRelevantRef}
    >
      <div className={classNames("hs-text-dark-brown")}>
        <p className="text-lg">Hình Ảnh</p>
      </div>
      <div className={classNames("hs-text-dark-grey")}>
        <p>Ảnh thực tế của phòng</p>
      </div>
      <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)} />
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center"
        )}
      >
        <Slider {...settings}>
          {roomType.images.map((item, idx) => (
            <div
              key={idx}
              className={classNames("col-4", Styles.feedbackImage)}
            >
              <img src={item.pictureUrl} alt={item.pictureDescription} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
