import classNames from "classnames";
import React from "react";
import Styles from "../ListRoomAvailability/ListRoomAvailability.module.scss";
import RoomAvailability from "../RoomAvailability/RoomAvailability";

export default function ListRoomAvailability({ callBackFunc, data }) {
  return (
    <div className={classNames("hs-bg-dark", Styles.ListRoomAvailability)}>
      <RoomAvailability data={data} callBackFunc={callBackFunc} />
    </div>
  );
}
