import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/HomePage/Header/Header";
import InfoBookingRoom from "../components/HomePage/InfoBookingRoom/InfoBookingRoom";
import IntroduceHotel from "../components/HomePage/IntroduceHotel/IntroduceHotel";
import ListHotelService from "../components/HomePage/ListHotelService/ListHotelService";
import OverviewRoom from "../components/HomePage/OverviewRoom/OverviewRoom";
import { loadingState$ } from "../redux/selectors/LoadingSelector";

export default function HomePage() {
  let isLoading = useSelector(loadingState$);
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
