/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import React, { useState } from "react";
import Styles from "./NewsComponent.module.scss";

import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as imageAction from "../../redux/actions/ImageAction";
import * as newsAction from "../../redux/actions/NewsAction";
import * as abstractionAction from "../../redux/actions/AbstractionActions";
import { ImageByTypeContainsState$ } from "../../redux/selectors/ImageSelector";
import { getAllNewsState$ } from "../../redux/selectors/NewsSelector";
import { CONSTANT } from "../../util/constant/settingSystem";
import TextTruncate from "../../util/utilities/text-truncate/TextTruncate";
import Loading from "../Loading/Loading";
import NewsDetailComponent from "./NewsDetailCompoment/NewsDetailComponent";
import { getAllAbstractionState$ } from "../../redux/selectors/AbstractionSelector";

const NewsComponent = () => {
  const [data, setData] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [destination, setDestination] = useState(null);
  const [event, setEvent] = useState(null);
  const listNews = useSelector(getAllNewsState$);
  const listImages = useSelector(ImageByTypeContainsState$);
  const dispatch = useDispatch();
  const [detail, setDetail] = useState(null);
  const listAbstraction = useSelector(getAllAbstractionState$);

  const ENTRY_TYPE = {
    coupon: "coupon",
    destination: "destination",
    event: "event",
    promotion: "promotion",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      imageAction.getImageByTypeContains.getImageByTypeContainsRequest(
        CONSTANT.IMAGE_ALL
      )
    );
    dispatch(newsAction.getAllNews.getAllNewsRequest());
    dispatch(abstractionAction.getAllAbstraction.getAllAbstractionRequest());
    setTimeout(() => {
      window.location.reload();
    }, 300000);
  }, [dispatch]);

  useEffect(() => {
    if (listNews.length !== 0 && listImages.length !== 0 && !data) {
      listNews.map((news) => {
        const listImageOfNews = listImages.filter(
          (image) =>
            image.pictureType.split("_")[2] === news.id.toString() &&
            image.pictureType.split("_")[1] === "new"
        );
        news.images = listImageOfNews;
      });
      const destination = listAbstraction.map((abstraction) => {
        const listOfImageAbstraction = listImages.filter(
          (image) =>
            image.pictureType.split("_")[2] === abstraction.id.toString() &&
            image.pictureType.split("_")[1] === "abstraction"
        );
        return { ...abstraction, images: listOfImageAbstraction };
      });
      setDestination(destination);
      setData(listNews);
    } else if (data) {
      const couponData = data.filter(
        (item) => item.newsType === ENTRY_TYPE.promotion
      );

      const eventData = data.filter(
        (item) => item.newsType === ENTRY_TYPE.event
      );
      setCoupon(couponData);
      setEvent(eventData);
    }
  }, [listImages, listNews, data, listAbstraction]);

  useEffect(() => {
    if (coupon && destination && event) {
      const currentTime = moment();
      const newEventChangeStatus = [];
      event.map((e) => {
        const eventStartTime = moment(
          e.startDate + " " + e.startTime + ":00",
          "DD/MM/YYYY HH:mm:ss"
        );
        const eventEndTime = moment(
          e.endDate + " " + e.endTime + ":00",
          "DD/MM/YYYY HH:mm:ss"
        );
        if (e.status === eventType.ON) {
          if (currentTime.isAfter(eventEndTime)) {
            e.status = eventType.DONE;
            newEventChangeStatus.push(e);
          }
        } else if (e.status === eventType.READY) {
          if (currentTime.isBetween(eventStartTime, eventEndTime)) {
            e.status = eventType.ON;
            newEventChangeStatus.push(e);
          }
        }
      });
      if (newEventChangeStatus.length > 0) {
        dispatch(
          newsAction.updateNewsEvent.updateNewsEventRequest(
            newEventChangeStatus
          )
        );
      }
    }
  }, [coupon, destination, event]);

  const handleOpenDetailPage = (data) => {
    setDetail(data);
  };

  const eventType = {
    DONE: "DONE",
    ON: "ON",
    READY: "READY",
  };

  const globalTab = {
    coupon: "Tin khuyến mãi",
    destination: "Các địa điểm tham quan",
    event: "Sự kiện",
  };

  const eventTab = {
    ON: "Đang diễn ra",
    READY: "Sắp diễn ra",
    DONE: "Đã diễn ra",
  };

  const [currentGlobalTab, setCurrentGlobalTab] = useState(
    Object.keys(globalTab)[0]
  );
  const [currentEventTab, setCurrentEventTab] = useState(null);

  const renderGlobalTab = () => {
    switch (currentGlobalTab) {
      case ENTRY_TYPE.coupon:
        return renderCoupon();
      case ENTRY_TYPE.destination:
        return renderDestination();
      case ENTRY_TYPE.event:
        return renderEvent();
      default:
        return null;
    }
  };

  const renderCoupon = () => {
    return (
      coupon && (
        <div className="col-10 row d-flex justify-content-space-between">
          {coupon.map((c, idx) => {
            return (
              <div className="col-6 hs-px-64 hs-py-32" key={idx}>
                <div
                  className={Styles.newsImageCoupon}
                  onClick={() => handleOpenDetailPage(c)}
                >
                  <img
                    src={c.images[0].pictureUrl}
                    alt={c.newName}
                    className="button"
                  />
                </div>
                <div className="hs-py-16">{c.newName}</div>
                <div className="hs-text-black-grey">
                  <TextTruncate text={c.description} mobile={3} desktop={3} />
                </div>
                <div className="hs-py-16">
                  <div
                    className="hs-text-dark-brown"
                    onClick={() => handleOpenDetailPage(c)}
                  >
                    <p className="button">Xem chi tiết +</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  };

  const renderDestination = () => {
    return (
      destination.length > 0 && (
        <div className="col-10">
          {destination.map((des, idx) => {
            return (
              <div className="hs-pb-32 row" key={idx}>
                <div
                  key={idx}
                  className={classNames("col-4", Styles.newsImageDes)}
                >
                  <img
                    src={des.images[0].pictureUrl}
                    alt={des.name}
                    className="button"
                  />
                </div>
                <div className="col-7">
                  <div className="text-lg">
                    {idx + 1}. {des.name}
                  </div>
                  <div className="hs-text-dark-grey hs-py-16">
                    {des.description}
                  </div>
                  <div className="hs-text-dark-grey hs-py-16">
                    Giờ mở cửa: {des.openTime} - {des.closeTime}
                  </div>
                  <div className="hs-text-dark-grey">Vị trí: {des.address}</div>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  };

  const renderSubEvent = (ev) => {
    const isCurrentTab = currentEventTab === ev.status;

    return isCurrentTab ? (
      <div className="col-6 hs-px-32 hs-py-24">
        <div
          className={classNames(
            "hs-bg-dark col-12 rounded",
            Styles.subEventTabContainer
          )}
          onClick={() => handleOpenDetailPage(ev)}
        >
          <div
            className={Styles.subEventImage}
            style={{ "--backgroundImage": `url(${ev.images[0].pictureUrl})` }}
          >
            <div
              className={classNames(
                "hs-text-dark-brown hs-bg-grey-6 hs-px-16",
                Styles.overlayText
              )}
            >
              {ev.ticketInformation}
            </div>
          </div>
          <div className="hs-px-16 hs-py-8">
            <div className="hs-text-dark-grey">{ev.address}</div>
            <div className="">
              <TextTruncate text={ev.newName} desktop={3} mobile={3} />
            </div>
            <div className={classNames("col-12 hs-py-8", Styles.subContentTab)}>
              <div className="row d-flex">
                <div className="hs-text-dark-grey col-8">
                  <i className="fa-regular fa-clock hs-pr-8"></i>
                  {ev.startTime}
                  {" - " + ev.endTime}
                </div>
                <div className="hs-text-dark-grey col-4">
                  <i className="fa-regular fa-eye hs-pr-8"></i>
                  {ev.numberOfView}
                </div>
              </div>
              <div className="hs-text-dark-grey">
                <i className="fa-regular fa-calendar hs-pr-8"></i>
                {ev.startDate}
                {ev.startDate !== ev.endDate ? " - " + ev.endDate : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };

  const renderEvent = () => {
    return (
      event && (
        <div className="col-10">
          <div className="d-flex">
            {Object.entries(eventTab).map(([key, value], index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    "col-2 text-center hs-py-4",
                    Styles.tabGlobalMenu,
                    currentEventTab === key
                      ? "hs-bg-dark-9 hs-text-white"
                      : "hs-text-dark-grey"
                  )}
                  onClick={() => setCurrentEventTab(key)}
                >
                  <p>{value}</p>
                </div>
              );
            })}
          </div>
          <div
            className={classNames(
              "hs-bg-dark-9 hs-px-0",
              Styles.subEventContainer
            )}
          >
            <div className="row d-flex">
              {event.map((ev, idx) => {
                return <>{renderSubEvent(ev)}</>;
              })}
            </div>
          </div>
        </div>
      )
    );
  };

  const handleChangeGlobalTab = (key) => {
    if (key === ENTRY_TYPE.event) {
      setCurrentEventTab(Object.keys(eventTab)[0]);
    }
    setDetail(null);
    setCurrentGlobalTab(key);
  };

  return !data ? (
    <Loading />
  ) : (
    <div
      className={classNames(
        "col-12 d-flex hs-bg-dark hs-py-64 d-flex justify-content-center",
        Styles.newsContainer
      )}
    >
      <div className="col-10 d-flex row">
        <div className="col-2">
          {Object.entries(globalTab).map(([key, value], index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "hs-py-16",
                  Styles.tabGlobalMenu,
                  currentGlobalTab === key
                    ? "hs-text-dark-brown"
                    : "hs-text-white"
                )}
                onClick={() => handleChangeGlobalTab(key)}
              >
                <p>{value}</p>
              </div>
            );
          })}
        </div>
        <div className={classNames("col-10", Styles.rightContent)}>
          <div className="col-12 d-flex justify-content-center hs-text-white">
            {!detail ? (
              renderGlobalTab()
            ) : (
              <NewsDetailComponent data={detail} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
