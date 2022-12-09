import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../../../util/constant/settingSystem";
import InfoBookingRoomValidate from "../../RoomPageValidate/InfoBookingRoom/InfoBookingRoomValidate";

const DropdownBooking = () => {
  const [count, setCount] = useState([{ adult: 1, child: 0 }]);
  const [arrayDate, setArrayDate] = useState({
    startDate: moment(),
    endDate: moment().add(1, "d"),
  });
  const navigate = useNavigate();

  const handleApplyRoom = (count) => {
    setCount(count);
    sessionStorage.setItem(CONSTANT.ROOM_SELECT, JSON.stringify(count));
  };

  const handleCheckAvailability = () => {
    navigate(CONSTANT.ROOM_VALIDATE, {
      state: {
        dateCheckIn: arrayDate.startDate.toString(),
        dateCheckout: arrayDate.endDate.toString(),
        count: count,
      },
    });
  };

  return (
    <InfoBookingRoomValidate
      arrayDate={arrayDate}
      setDateArray={setArrayDate}
      numOfPerson={1}
      numOfChild={0}
      countDefault={count}
      setCloseCB={() => {}}
      home={true}
      handleApplyRoomCb={handleApplyRoom}
      checkAvailabilityCB={handleCheckAvailability}
    />
  );
};

export default DropdownBooking;
