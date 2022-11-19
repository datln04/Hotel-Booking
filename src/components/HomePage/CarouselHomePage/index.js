import React from "react";
import Slider from "react-slick";
import "./style.css";


export default function CarouselHomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div
      id="introduceCarousel"
      className="carousel slide introduce-carousel"
      data-ride="carousel"
    >
      <Slider {...settings}>
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="../../../assets/img/trangchu.jpg"
            alt="First slide"
          />
          <div className="carousel-content text-center text-white">
            <h1>
              <span>Vị Giác Thăng Hoa</span>
            </h1>
            <p>Cảm Nhận Sự Hoàn Hảo</p>
            <div className="button__rm">
              <a
                className="btn btn-lg"
                href="/"
                data-toggle="modal"
                data-target="#myModal"
              >
                Khám Phá »
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="../../../assets/img/phong.jpg"
            alt="Second slide"
          />
          <div className="carousel-content text-center text-white">
            <h1>
              <span>Tình Yêu</span>
            </h1>
            <p>Nơi Hội Tụ Tình Yêu</p>
            <div className="button__rm">
              <a
                className="btn btn-lg"
                href="/"
                data-toggle="modal"
                data-target="#myModal"
              >
                Khám Phá »
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="../../../assets/img/standardRoom.jpg"
            alt="Third slide"
          />
          <div className="carousel-content text-center text-white">
            <h1>
              <span>Hoàn Mỹ</span>
            </h1>
            <p>Cảm Nhận Sự Hoàn Mỹ</p>
            <div className="button__rm">
              <a
                className="btn btn-lg"
                href="/"
                data-toggle="modal"
                data-target="#myModal"
              >
                Khám Phá »
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
