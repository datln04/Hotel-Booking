import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import Styles from "../ListRoomAvailability/ListRoomAvailability.module.scss";
import RoomAvailability from "../RoomAvailability/RoomAvailability";

export default function ListRoomAvailability({
  callBackFunc,
  data,
  roomSelect,
}) {
  useEffect(() => {
    if (roomSelect.length > 0) {
      data.map((room) => {
        const existRoom = roomSelect.find((r) => r.id === room.id);
        if (existRoom && existRoom.isSelected) {
          room.maxBookingRoom -= 1;
        }
      });
    }
  }, [data]);

  return (
    <div className={classNames("hs-bg-dark", Styles.ListRoomAvailability)}>
      <RoomAvailability data={data} callBackFunc={callBackFunc} />
    </div>
  );
}
