import classNames from "classnames";
import React from "react";

const NewsDetailComponent = ({ data }) => {
  return (
    <div className={classNames("hs-bg-dark-low hs-px-64")}>
      <img
        className="h-50 w-75"
        src={data.images[0].pictureUrl}
        alt={data.images[0].pictureDescription}
      />
      <p className="hs-text-white text-xl hs-py-32">{data.newName}</p>
      <div className="d-flex align-items-center hs-text-dark-grey">
        <i className="fa-regular fa-calendar hs-pr-8"></i>
        <p className="hs-px-8">
          {data.startDate} - {data.endDate}
        </p>
      </div>
      <div className="d-flex align-items-center hs-text-dark-grey hs-py-16">
        <i className="fa-regular fa-clock hs-pr-8"></i>
        <p className="hs-px-8">
          {data.startTime} - {data.endTime}
        </p>
      </div>
      <div className="hs-py-24 hs-text-dark-grey">
        <p className="w-50 hs-border-bottom-dark-grey hs-pb-8">Thông tin vé</p>
        <p className="hs-py-16 hs-text-white text-uppercase">
          {data.ticketInformation}
        </p>
      </div>
      <div className="hs-py-24 hs-text-dark-grey">
        <p className="w-50 hs-border-bottom-dark-grey hs-pb-8">Mô tả sự kiện</p>
        <p className="hs-py-16 hs-text-white text-uppercase">
          {data.newsType === "event"
            ? data.description
            : data.detailInformation}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailComponent;
