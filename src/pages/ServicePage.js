import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import HotelService from "../components/ServicePage/HotelService/HotelService";
import image from "./../assets/images/servicePage/dichVu.jpg";
import * as actions from "../redux/actions/ServiceCategoryAction";
import { serviceCategoryState$ } from "../redux/selectors/ServiceCategorySelector";
export default function ServicePage() {
  const dispatch = useDispatch();
  const listServiceCategory = useSelector(serviceCategoryState$);
  useEffect(() => {
    dispatch(actions.getAllService.getAllServiceRequest());
  }, [dispatch]);
  return (
    <div className="main-screen">
      <Breadcrumb image={image} />
      <HotelService listServiceCategory={listServiceCategory} />
    </div>
  );
}
