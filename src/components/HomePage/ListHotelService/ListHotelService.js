import React, { useEffect } from "react";
import Styles from "./ListHotelService.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import * as actions from "../../../redux/actions/ServiceCategoryAction";
import classNames from "classnames";
import HotelServiceSlide from "../HotelService/HotelServiceSlide";
import "./CustomSlider.css";
import { serviceCategoryTypeState$ } from "../../../redux/selectors/ServiceCategorySelector";

const ListHotelService = () => {
  const dispatch = useDispatch();
  const listServiceCategory = useSelector(serviceCategoryTypeState$);
  useEffect(() => {
    dispatch(
      actions.getServiceCategory.getServiceCategoryRequest(
        "img_serviceCategory"
      )
    );
  }, [dispatch]);

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <button>{i + 1}</button>,
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
        "introduce col-12 hs-bg-dark-9 hs-py-32",
        Styles.listServiceContainer
      )}
    >
      <div className="text-xl hotel-name">5 Men Hotel</div>
      <div className="text-xl title">Những Dịch Vụ Hấp Dẫn</div>
      <hr className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr2)} />
      <div className={classNames("hs-py-32 col-12 d-flex", Styles.Slider)}>
        <div className="col-10">
          <Slider {...settings}>
            {listServiceCategory.map((service) => (
              <HotelServiceSlide service={service} key={service.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ListHotelService;
