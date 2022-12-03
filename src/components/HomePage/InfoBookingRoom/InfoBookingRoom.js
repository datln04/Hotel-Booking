import moment from "moment/moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../../../util/constant/settingSystem";
import InfoBookingRoomValidate from "../../RoomPageValidate/InfoBookingRoom/InfoBookingRoomValidate";

const InfoBookingRoom = () => {
  const adult = 1;
  const children = 0;
  const navigate = useNavigate();

  const [arrayDate, setArrayDate] = useState({
    startDate: moment(new Date()),
    endDate: moment(new Date()).add(1, "d"),
  });

  const handleApplyRoom = (count) => {
    navigate(CONSTANT.ROOM_VALIDATE, {
      state: {
        dateCheckIn: arrayDate.startDate.format("DD/MM/yyyy"),
        dateCheckout: arrayDate.endDate.format("DD/MM/yyyy"),
        count: count,
      },
    });
  };

  const [close, setClose] = useState(false);
  const [roomSelect, setRoomSelect] = useState([]);

  return (
    <InfoBookingRoomValidate
      handleApplyRoomCb={handleApplyRoom}
      arrayDate={arrayDate}
      numOfPerson={adult}
      numOfChild={children}
      setDateArray={setArrayDate}
      close={close}
      setCloseCB={setClose}
      setRoomSelect={setRoomSelect}
    />
  );
};

export default InfoBookingRoom;
