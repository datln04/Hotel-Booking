import React from "react";
import Header from "../components/HomePage/Header/Header";
import InfoBookingRoom from "../components/HomePage/InfoBookingRoom/InfoBookingRoom";
import IntroduceHotel from "../components/HomePage/IntroduceHotel/IntroduceHotel";
import ListHotelService from "../components/HomePage/ListHotelService/ListHotelService";
import OverviewRoom from "../components/HomePage/OverviewRoom/OverviewRoom";

export default function HomePage() {
  window.scrollTo(0, 0);
  return (
    <div className="main-screen">
      <Header />
      <InfoBookingRoom />
      <IntroduceHotel />
      <OverviewRoom />
      <ListHotelService />
    </div>
  );
}
