import Cookies from "js-cookie";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import image from "../assets/images/roomType/phong.jpg";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import InfoBookingRoomValidate from "../components/RoomPageValidate/InfoBookingRoom/InfoBookingRoomValidate";
import RoomAvailability from "../components/RoomPageValidate/InfoRoomAvailability/InfoRoomAvailability";
import * as paymentAction from "../redux/actions/PaymentAction";
import * as actions from "../redux/actions/RoomAvailability";
import { RoomAvailabilityState$ } from "../redux/selectors/RoomAvailabilitySelector";
import { CONSTANT } from "../util/constant/settingSystem";
import { checkDate } from "../util/utilities/utils";
import * as hotelAction from "../redux/actions/HotelServiceAction";
import * as serviceAction from "../redux/actions/ServiceAction";
import * as specialUtilityAction from "../redux/actions/SpecialUtilityActions";
import * as imageAction from "../redux/actions/ImageAction";
import { ServiceByCategoryIdState$ } from "../redux/selectors/ServiceSelector";
import { SpecialUtilityState$ } from "../redux/selectors/SpecialUtilitySelector";
import { HotelByIdState$ } from "../redux/selectors/HotelServiceSelector";
import { ImageByTypeContainsState$ } from "../redux/selectors/ImageSelector";
import { useCallback } from "react";
import Loading from "../components/Loading/Loading";

export default function RoomPageCheckValidate() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const dateCheckInDefault = location.state?.dateCheckIn ?? moment(new Date());
  const dateCheckOutDefault =
    location.state?.dateCheckout ?? moment(new Date()).add(1, "d");
  const personDefault = location.state?.numOfPerson ?? 1;
  const childDefault = location.state?.numOfChild ?? 0;
  const [count, setCount] = useState([
    {
      adult: personDefault,
      child: childDefault,
    },
  ]);
  const [roomSelect, setRoomSelect] = useState([]);
  const [tab, setTab] = useState(1);
  const [arrayDate, setArrayDate] = useState({
    startDate: moment(dateCheckInDefault),
    endDate: moment(dateCheckOutDefault),
  });
  const dispatch = useDispatch();
  const airportShuttle = useSelector(ServiceByCategoryIdState$);
  const specialUtility = useSelector(SpecialUtilityState$);
  const hotelInfo = useSelector(HotelByIdState$);
  const listRoomAvailability = useSelector(RoomAvailabilityState$);
  const listImageRoom = useSelector(ImageByTypeContainsState$);
  const [close, setClose] = useState(false);

  const handleApplyRoom = (count) => {
    setCount(count);
    sessionStorage.setItem(CONSTANT.ROOM_SELECT, JSON.stringify(count));
    setTab(1);
    setRoomSelect([]);
  };

  useEffect(() => {
    if (
      listRoomAvailability &&
      listRoomAvailability.images === undefined &&
      listImageRoom.length !== 0
    ) {
      sessionStorage.setItem(CONSTANT.ROOM_SELECT, JSON.stringify(count));
      listRoomAvailability.map((roomType) => {
        const listImageOfRoomType = listImageRoom.filter(
          (image) => image.pictureType.split("_")[2] === roomType.id.toString()
        );
        roomType.images = listImageOfRoomType;
      });
      setData(listRoomAvailability);
    }
  }, [listRoomAvailability, listImageRoom]);

  useEffect(() => {
    if (arrayDate.startDate && arrayDate.endDate) {
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
        if (tab > 1) {
          setTab(1);
        }
        dispatch(
          actions.getRoomAvailability.getRoomAvailabilityRequest(
            `dateCheckIn=${checkDate(
              arrayDate.startDate,
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomSelect, count, close]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.href = "/";
    }, 600000);
    if (
      (location.state === undefined ||
        location.state === null ||
        location.state === "") &&
      (Cookies.get(CONSTANT.PAYMENT_INFO) === undefined ||
        Cookies.get(CONSTANT.PAYMENT_INFO) === null)
    ) {
      window.location.href = "/";
    } else {
      dispatch(paymentAction.getPaymentVnPayConfirm.clearPaymentVNPayConfirm());
      dispatch(
        serviceAction.getAllServiceByCategoryId.getServiceByCategoryIdRequest(
          12
        )
      );
      dispatch(
        specialUtilityAction.getSpecialUtility.getSpecialUtilityRequest()
      );
      dispatch(hotelAction.getHotelServiceById.getHotelServiceByIdRequest(1));
      dispatch(
        imageAction.getImageByTypeContains.getImageByTypeContainsRequest(
          CONSTANT.IMAGE_TYPE_ROOM_TYPE
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return !data ? (
    <Loading />
  ) : (
    <div className="main-screen">
      <Breadcrumb image={image} />
      <InfoBookingRoomValidate
        handleApplyRoomCb={handleApplyRoom}
        arrayDate={arrayDate}
        numOfPerson={location.state?.numOfPerson ?? 1}
        numOfChild={location.state?.numOfChild ?? 0}
        setDateArray={setArrayDate}
        setRoomSelect={setRoomSelect}
        close={close}
        setCloseCB={setClose}
        countDefault={count}
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
