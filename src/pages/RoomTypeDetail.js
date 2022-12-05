/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import imageBreadcrumb from "../assets/images/roomType/phong.jpg";
import Breadcrumb from "../components/RoomPage/RoomTypeDetail/Breadcrumb/Breadcrumb";
import InformationOfRoomType from "../components/RoomPage/RoomTypeDetail/InformationOfRoomType/InformationOfRoomType";
import * as hotelAction from "../redux/actions/HotelServiceAction";
import { HotelByIdState$ } from "../redux/selectors/HotelServiceSelector";
export default function RoomTypeDetail() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const hotelInfo = useSelector(HotelByIdState$);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      (location.state === undefined ||
        location.state === null ||
        location.state === "") &&
      !searchParams.toString().includes("#")
    ) {
      window.location.href = "/";
    } else {
      dispatch(hotelAction.getHotelServiceById.getHotelServiceByIdRequest(1));
    }
  }, [dispatch]);

  return (
    <div className="main-screen">
      <Breadcrumb image={imageBreadcrumb} />
      <InformationOfRoomType roomType={location.state} hotelInfo={hotelInfo} />
    </div>
  );
}
