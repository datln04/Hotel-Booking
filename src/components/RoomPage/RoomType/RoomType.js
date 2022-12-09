import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../../../util/constant/settingSystem";
import Styles from "./RoomType.module.scss";
export default function RoomType() {
  const data = [
    {
      title: "Standard Room",
      bedType: "Giường King",
      image: "https://i.ibb.co/tCt8kcB/anhthucte1.png",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "20m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      images: [
        {
          id: 3,
          pictureType: "img_roomType_5",
          pictureDescription: "Standard 001",
          pictureUrl: "https://i.ibb.co/tCt8kcB/anhthucte1.png",
        },
        {
          id: 105,
          pictureType: "img_roomType_5",
          pictureDescription: "Standard 001",
          pictureUrl: "https://i.ibb.co/87bbnPW/standard-king-2.jpg",
        },
        {
          id: 106,
          pictureType: "img_roomType_5",
          pictureDescription: "Standard 001",
          pictureUrl: "https://i.ibb.co/WpHTHkz/standard-king-3.jpg",
        },
      ],
      person: {
        num: 2,
        icon: "fa-solid fa-user-group",
      },
      size: {
        num: 20,
        icon: "fa-solid fa-maximize",
      },
      inFront: {
        name: "Hướng phố",
        icon: "fa-solid fa-sun",
      },
      utilities: [
        {
          id: 3,
          name: "Điều hòa",
        },
        {
          id: 4,
          name: "Tivi",
        },
        {
          id: 1,
          name: "Dép trong nhà",
        },
        {
          id: 5,
          name: "Tủ quần áo",
        },
      ],
    },
    {
      title: "Superior Room",
      bedType: "Giường King",
      image: "https://i.ibb.co/8MtncR4/phong.jpg",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "40m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      images: [
        {
          id: 6,
          pictureType: "img_roomType_3",
          pictureDescription: "Superior 001",
          pictureUrl: "https://i.ibb.co/8MtncR4/phong.jpg",
        },
        {
          id: 101,
          pictureType: "img_roomType_3",
          pictureDescription: "Superior 001",
          pictureUrl: "https://i.ibb.co/N19GGJm/superior-king-2.jpg",
        },
        {
          id: 102,
          pictureType: "img_roomType_3",
          pictureDescription: "Superior 001",
          pictureUrl: "https://i.ibb.co/FVY7B93/superior-king-3.jpg",
        },
      ],
      person: {
        num: 2,
        icon: "fa-solid fa-user-group",
      },
      size: {
        num: 40,
        icon: "fa-solid fa-maximize",
      },
      inFront: {
        name: "Hướng Núi",
        icon: "fa-solid fa-mountain-sun",
      },
      utilities: [
        {
          id: 3,
          name: "Điều hòa",
        },
        {
          id: 4,
          name: "Tivi",
        },
        {
          id: 1,
          name: "Dép trong nhà",
        },
        {
          id: 2,
          name: "Điện thoại",
        },
      ],
    },
    {
      title: "Deluxe Room",
      bedType: "Giường King",
      image: "https://i.ibb.co/VT4Q43H/deluxe-room.jpg",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "80m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
      images: [
        {
          id: 9,
          pictureType: "img_roomType_1",
          pictureDescription: "Deluxe 001",
          pictureUrl: "https://i.ibb.co/VT4Q43H/deluxe-room.jpg",
        },
        {
          id: 97,
          pictureType: "img_roomType_1",
          pictureDescription: "Deluxe 001",
          pictureUrl: "https://i.ibb.co/2Z2wmF5/deluxe-king-2.jpg",
        },
        {
          id: 98,
          pictureType: "img_roomType_1",
          pictureDescription: "Deluxe 001",
          pictureUrl: "https://i.ibb.co/j3DPC6v/deluxe-king-3.jpg",
        },
      ],
      person: {
        num: 2,
        icon: "fa-solid fa-user-group",
      },
      size: {
        num: 80,
        icon: "fa-solid fa-maximize",
      },
      inFront: {
        name: "Hướng biển",
        icon: "fa-solid fa-umbrella-beach",
      },
      utilities: [
        {
          id: 1,
          name: "Dép trong nhà",
        },
        {
          id: 3,
          name: "Điều hòa",
        },
        {
          id: 5,
          name: "Tủ quần áo",
        },
        {
          id: 7,
          name: "Wifi",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleBookRoom = (item) => {
    navigate(CONSTANT.ROOM_TYPE_DETAIL, { state: item });
  };

  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center align-items-center text-center text-md-start hs-py-96",
        Styles.gainContainer
      )}
    >
      <div className="col-12 col-lg-9 row hs-px-12">
        {data &&
          data.map((item, index) => {
            return (
              <div className="col-12 col-lg-4" key={index}>
                <div className="hs-text-white text-center">
                  <p>{item.title}</p>
                </div>
                <hr
                  className={classNames(
                    "hs-text-dark-brown hs-mt-8",
                    Styles.hr2
                  )}
                />
                <div className={classNames(Styles.imageRoomType)}>
                  <img src={item.image} alt="room" />
                </div>
                <div className="d-flex row justify-content-start align-items-center">
                  {item.description &&
                    item.description.map((i, index) => {
                      return (
                        <div className="col-6 d-flex hs-pt-8 align-items-center">
                          <div className="hs-text-dark-brown text-lg">
                            <i className={i.icon}></i>
                          </div>
                          <div className="hs-text-dark-grey hs-pl-8 justify-content-start">
                            <p>{i.text}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div
                  className={classNames(
                    "text-lg d-flex justify-content-start hs-pt-8",
                    Styles.buttonDetail
                  )}
                >
                  <div
                    className="button hs-text-dark-brown"
                    onClick={() => handleBookRoom(item)}
                  >
                    Xem chi tiết +
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
