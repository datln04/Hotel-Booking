import React from "react";
import Breadcrumb from "../components/RoomPage/Breadcrumb/Breadcrumb";
import RoomType from "../components/RoomPage/RoomType/RoomType";
import imageBreadcrumb from "../assets/images/roomType/phong.jpg";
export default function RoomPage() {
  return (
    <div className="main-screen">
      <Breadcrumb image={imageBreadcrumb} />
      <RoomType />
      {/* <Footer />
      <FooterCopyRight /> */}
    </div>
  );
}
