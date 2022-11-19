import React from 'react'
import Breadcrumb from '../components/RoomPage/RoomTypeDetail/Breadcrumb/Breadcrumb'
import imageBreadcrumb from "../assets/images/roomType/phong.jpg";
import InformationOfRoomType from '../components/RoomPage/RoomTypeDetail/InformationOfRoomType/InformationOfRoomType';
import ImageOfRoomType from '../components/RoomPage/RoomTypeDetail/ImageOfRoomType/ImageOfRoomType';
export default function RoomTypeDetail() {
  return (
    <div className="main-screen">
        <Breadcrumb image={imageBreadcrumb}/>
        <InformationOfRoomType/>
        <ImageOfRoomType/>
    </div>
  )
}
