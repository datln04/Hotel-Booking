import React from "react";
import Styles from "./Header.module.scss";
import background from "./../../../assets/images/trangchu.jpg";
import ServiceBookingItem from "../ServiceBookingItem/ServiceBookingItem";
import { loadingState$ } from "../../../redux/selectors/LoadingSelector";
import { useSelector } from "react-redux";

const Header = () => {
  let isLoading = useSelector(loadingState$);
  return (
    <div
      className={
        isLoading ? Styles.HeaderContainerIsActive : Styles.HeaderContainer
      }
      style={{ "--backgroundImage": `url(${background})` }}
    >
      <ServiceBookingItem />
    </div>
  );
};

export default Header;
