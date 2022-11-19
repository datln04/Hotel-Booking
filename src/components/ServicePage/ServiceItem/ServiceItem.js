import classNames from "classnames";
import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Styles from "../ServiceItem/ServiceItem.module.scss";
import * as actions from "../../../redux/actions/ServiceCategoryAction"
import { useNavigate } from "react-router-dom";
export default function ServiceItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loadServiceDetail = useCallback(()=>{
      dispatch(actions.getServiceCategoryById.getServiceCategoryByIdRequest(item.id))
      navigate({})
  },[item.id,dispatch])
  return (
    <div
      className={classNames(
        "col-12 col-md-6 hs-text-white hs-py-8",
        Styles.ServiceItem
      )}
    >
      <div onClick={()=>loadServiceDetail()}>
        <div className={classNames(Styles.ImageService)}>
          <img src={item.pictureUrl} alt="#" />
        </div>
        <div
          className={classNames(
            "hs-text-white hs-bg-dark",
            Styles.TitleService
          )}
        >
          <p>{item.pictureDescription}</p>
        </div>
      </div>
    </div>
  );
}
