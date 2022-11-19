import classNames from "classnames";
import React, { useState } from "react";
import Styles from "../ServiceDetail/ServiceDetail.module.scss";
import FoodCategory from "../FoodCategory/FoodCategory";
import MenuOverview from "../MenuOverview/MenuOverview";
import DrinkCategory from "../DrinkCategory/DrinkCategory";
export default function ServiceDetail({ data,dataDrink }) {
  const data1 = {
    descriptionFood:
      "Để chuyến du lịch trọn vẹn về mọi mặt thì thức ăn cũng góp một phần cực kỳ to lớn trong cả chuyến đi vì thế khách sạn chúng tôi vô cùng quan tâm cũng như đầu tư bài bản về chất lượng cũng như hình thức nhằm đem lại trãi nghiệm trọn vẹn đến với quý du khách. Dưới đây là những món ăn và các thực đơn tiêu biểu của khách sạn. ",
    descriptionDrink:
      "Đồ uống ngon cùng với những món ăn tuyệt vời là tiêu chí hàng đầu mà chúng tôi quan tâm. Đồ uống được đội ngũ nhân viên chúng tôi pha chế và trình bày đẹp mắt nhằm đem lại thêm nhiều màu sắc nâng tầm trãi nghiệm khi thưởng thức.",
  };
  const menuFood = [];
  const [foodDetail, setFoodDetail] = useState(false);
  const updateFoodDetail = (state) => {
    if (!state) {
      setFoodDetail(false);
    } else {
      setFoodDetail(true);
    }
  };
  const displayFoodDetail = (foodDetail) => {
    if (!foodDetail) {
      return (
        <div className={classNames("col-12 hs-bg-dark", Styles.FoodOverview)}>
          <div
            className={classNames(
              "hs-text-grey d-flex justify-content-center align-items-center hs-pt-16 text-center",
              Styles.DescriptionFood
            )}
          >
            <p>{data1.descriptionFood}</p>
          </div>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-32 ", Styles.hr2)}
          />
          <FoodCategory data={data} />
          <MenuOverview data={data} />
        </div>
      );
    } else {
      return (
        <div className={classNames("col-12 hs-bg-dark", Styles.ServiceDetailDrink)}>
          <div
            className={classNames(
              "hs-text-grey d-flex justify-content-center align-items-center hs-pt-16 text-center",
              Styles.DescriptionFood
            )}
          >
            <p>{data1.descriptionDrink}</p>
          </div>
          <hr
            className={classNames("hs-text-dark-brown hs-mt-32 ", Styles.hr2)}
          />
          <DrinkCategory data={dataDrink} />
        </div>
      );
    }
  };
  return (
    <div className={classNames("col-12 hs-bg-dark", Styles.ServiceDetail)}>
      <div className={classNames("col-12 row d-block text-center")}>
        <div
          className={classNames(
            "d-flex justify-content-center align-items-center hs-pt-56",
            Styles.SectionTitle
          )}
        >
          <div
            className={classNames(
              "text-md hs-text-dark-grey hs-px-32 text-uppercase",
              Styles.SectionTitleItem
            )}
          >
            <a
              href="#tongQuan"
              onClick={() => {
                updateFoodDetail(false);
              }}
            >
              Thức Ăn
            </a>
            <hr
              className={classNames("hs-text-dark-brown hs-mt-8 ", Styles.hr1)}
            />
          </div>
          <div
            className={classNames(
              "text-md hs-text-dark-grey hs-px-32 text-uppercase",
              Styles.SectionTitleItem
            )}
          >
            <a
              href="#tienich"
              onClick={() => {
                updateFoodDetail(true);
              }}
            >
              Đồ Uống
            </a>
            <hr
              className={classNames("hs-text-dark-brown hs-mt-8", Styles.hr1)}
            />
          </div>
        </div>
      </div>
      {displayFoodDetail(foodDetail)}
    </div>
  );
}
