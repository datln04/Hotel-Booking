import Cookies from "js-cookie";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import image from "../assets/images/roomType/phong.jpg";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import InfoBookingRoomValidate from "../components/RoomPageValidate/InfoBookingRoom/InfoBookingRoomValidate";
import RoomAvailability from "../components/RoomPageValidate/InfoRoomAvailability/InfoRoomAvailability";
import * as hotelAction from "../redux/actions/HotelServiceAction";
import * as actions from "../redux/actions/RoomAvailability";
import * as serviceAction from "../redux/actions/ServiceAction";
import * as specialUtilityAction from "../redux/actions/SpecialUtilityActions";
import { HotelByIdState$ } from "../redux/selectors/HotelServiceSelector";
import { RoomAvailabilityState$ } from "../redux/selectors/RoomAvailabilitySelector";
import { ServiceByCategoryIdState$ } from "../redux/selectors/ServiceSelector";
import { SpecialUtilityState$ } from "../redux/selectors/SpecialUtilitySelector";
import { CONSTANT } from "../util/constant/settingSystem";
import { checkDate } from "../util/utilities/utils";

export default function RoomPageCheckValidate() {
  const [searchParams] = useSearchParams();
  const [count, setCount] = useState([{ adult: 1, child: 0 }]);
  const [roomSelect, setRoomSelect] = useState([]);
  const [tab, setTab] = useState(1);
  const location = useLocation();
  const [arrayDate, setArrayDate] = useState({
    startDate: moment(location.state?.dateCheckIn) ?? moment(new Date()),
    endDate: moment(
      location.state?.dateCheckout ?? moment(new Date()).add(1, "d")
    ),
  });
  const dispatch = useDispatch();
  const airportShuttle = useSelector(ServiceByCategoryIdState$);
  const specialUtility = useSelector(SpecialUtilityState$);
  const hotelInfo = useSelector(HotelByIdState$);
  const listRoomAvailability = useSelector(RoomAvailabilityState$);

  const handleApplyRoom = (count) => {
    setCount(count);
    setTab(1);
  };

  useEffect(() => {
    const currentNumOfPerson = roomSelect.findIndex(
      (x) => x.isSelected === false
    );

    if (currentNumOfPerson !== -1) {
      dispatch(
        actions.getRoomAvailability.getRoomAvailabilityRequest(
          `dateCheckIn=${arrayDate.startDate.format(
            "DD/MM/yyyy"
          )}&dateCheckOut=${arrayDate.endDate.format(
            "DD/MM/yyyy"
          )}&numOfPerson=${
            Number(count[currentNumOfPerson].adult) +
            Number(count[currentNumOfPerson].child)
          }`
        )
      );
    } else if (roomSelect.length < count.length && tab < 3) {
      const roomIndex = roomSelect.length - count.length + count.length;
      dispatch(
        actions.getRoomAvailability.getRoomAvailabilityRequest(
          `dateCheckIn=${checkDate(
            arrayDate.endDate,
            "DD/MM/yyyy"
          )}&dateCheckOut=${checkDate(
            arrayDate.endDate,
            "DD/MM/yyyy"
          )}&numOfPerson=${
            Number(count[roomIndex].adult) + Number(count[roomIndex].child)
          }`
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomSelect, count]);

  useEffect(() => {
    if (
      (location.state === undefined ||
        location.state === null ||
        location.state === "") &&
      (Cookies.get(CONSTANT.PAYMENT_INFO) === undefined ||
        Cookies.get(CONSTANT.PAYMENT_INFO) === null)
    ) {
      window.location.href = "/";
    } else {
      console.log("error", Cookies.get(CONSTANT.PAYMENT_INFO));
      dispatch(
        serviceAction.getAllServiceByCategoryId.getServiceByCategoryIdRequest(4)
      );
      dispatch(
        specialUtilityAction.getSpecialUtility.getSpecialUtilityRequest()
      );
      dispatch(hotelAction.getHotelServiceById.getHotelServiceByIdRequest(1));
      if (!searchParams.toString()) {
        dispatch(
          actions.getRoomAvailability.getRoomAvailabilityRequest(
            `dateCheckIn=${moment(location.state.dateCheckIn).format(
              "DD/MM/yyyy"
            )}&dateCheckOut=${moment(location.state.dateCheckout).format(
              "DD/MM/yyyy"
            )}&numOfPerson=${location.state.numOfPerson}`
          )
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="main-screen">
      <Breadcrumb image={image} />
      <InfoBookingRoomValidate
        handleApplyRoomCb={handleApplyRoom}
        arrayDate={arrayDate}
        numOfPerson={location.state?.numOfPerson ?? 1}
        roomSelect={roomSelect}
        setDateArray={setArrayDate}
        handleApplyDate={handleApplyRoom}
      />
      <RoomAvailability
        count={count}
        arrayDate={arrayDate}
        airportShuttleList={airportShuttle}
        specialUtilityList={specialUtility}
        hotelInfo={hotelInfo}
        listRoomAvailability={listRoomAvailability}
        roomSelect={roomSelect}
        setRoomSelect={setRoomSelect}
        tab={tab}
        setTab={setTab}
      />
    </div>
  );
}
