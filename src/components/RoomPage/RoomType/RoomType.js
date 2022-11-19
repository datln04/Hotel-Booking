import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomTypeState$ } from "../../../redux/selectors/RoomTypeSelector";
import Styles from "./RoomType.module.scss";
import * as actions from "../../../redux/actions/RoomTypeAction";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// import '../../../../public/assets/img/standardRoom.jpg'
export default function RoomType() {
  const dispatch = useDispatch;
  // React.useEffect(() => {
  //   dispatch(actions.getRoomType.getRoomTypeRequest());
  // }, [dispatch]);
  // let arrRoomType = useSelector(roomTypeState$);
  const data = [
    {
      title: "Standard Room",
      image: "https://i.ibb.co/c6hcy1D/standard-room.jpg",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
    },
    {
      title: "Superior Room",
      image: "https://i.ibb.co/c6hcy1D/standard-room.jpg",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
    },
    {
      title: "Deluxe Room",
      image: "https://i.ibb.co/c6hcy1D/standard-room.jpg",
      description: [
        { icon: "fa-solid fa-bed", text: "Giường Đôi" },
        { icon: "fa-solid fa-users", text: "2 Người" },
        { icon: "fa-solid fa-text-width", text: "19m2" },
        { icon: "fa-regular fa-compass", text: "Hướng Phố" },
      ],
    },
  ];
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
                <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr2)} />
                <div className={classNames(Styles.imageRoomType)}>
                  <img src={item.image} alt="" />
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
                <div className={classNames("text-lg d-flex justify-content-start hs-pt-8", Styles.buttonDetail)}>
                  <a href="#">Đặt Phòng +</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
