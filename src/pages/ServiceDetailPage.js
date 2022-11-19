import React, { useEffect } from "react";
import Breadcrumb from "../components/IntroducePage/Breadcrumb/Breadcrumb";
import ServiceDescription from "../components/ServicePage/ServiceDetailPage/ServiceDescription/ServiceDescription";
import ServiceDetail from "../components/ServicePage/ServiceDetailPage/ServiceDetail/ServiceDetail";
import * as actions from "../redux/actions/ServiceCategoryAction"
import image from "./../assets/images/servicePage/dichVu.jpg";
import image1 from "../assets/images/servicePage/serviceDetail/suphaisan.jpg";
import image2 from "../assets/images/servicePage/serviceDetail/cangcuabachhoa.jpg";
import image3 from "../assets/images/servicePage/serviceDetail/coffee.jpg";
import { useDispatch, useSelector } from "react-redux";
import { serviceCategoryDetailTypeState$ } from "../redux/selectors/ServiceCategorySelector";
export default function ServiceDetailPage() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(actions.getServiceCategory.getServiceCategoryRequest())
  // },[dispatch])
  const serviceDetail = useSelector(serviceCategoryDetailTypeState$)
  const dataFood = [
    {
      title: "Các món khai vị",
      description:
        "Thông thường để mở đầu bữa tiệc thường là món khai vị với những món ăn nhẹ, nhỏ xinh,  chế biến đơn giản không tốn quá nhiều thời gian chế biến, hương vị thanh đạm, tuy món khai vị thường trông không quá đặc sắc nhưng lại là yếu tố quan trọng kích thích vị giác cho người dùng, giúp thực khách ngon miệng khi dùng những món ăn tiếp theo Dưới đây là một số món khai vị tham khảo của khách sạn",
      listFood: [
        { name: "Càng cua bách hoa" },
        { name: "Súp hải sản hoàng kim" },
        { name: "Súp rau củ kiểu Ý" },
        { name: "Súp cua bể hải sâm" },
        { name: "Gỏi hải sản" },
        { name: "Salad hoàng đế" },
      ],
      imageFood: [{ imageItem: image1 }, { imageItem: image2 }],
    },
    {
      title: "Các món chính",
      description:
        "Món ăn chính thường là những món được chế biến khá là cầu kì và công phu. Món ăn chính là món được các đầu bếp chú trọng nhất từ phần lựa chọn nguyên liệu chất lượng, cách chế biến nêm nếm hương vị cho tới màu sắc của món ăn nhằm hấp dẫn vị giác lẫn thị giác của người thưởng thức. Dưới đây là một số món chính gợi ý của khách sạn.",
      listFood: [
        { name: "Bò nấu cay kiểu La Mã" },
        { name: "Miến xào tôm Hong Kong" },
        { name: "Gà hấp đông cô sốt bào ngư" },
        { name: "Ghẹ rang muối" },
        { name: "Sườn non chiên kiểu Hoa" },
        { name: "Tôm càng nướng" },
      ],
      imageFood: [{ imageItem: image1 }, { imageItem: image2 }],
    },
    {
      title: "Các món tráng miệng",
      description:
        "Món tráng miệng sẽ được phục vụ vào cuối mỗi buổi tiệc, thường là những món ngọt như trái cây, bánh, chè,….nhằm giúp cho khách mời cân bằng lại vị giác sau khi ăn những món chính thịt cá nhiều dầu mỡ. Món tráng miệng thường có vị thanh mát, ngọt dịu và cực kì tốt cho sức khỏe. Dưới đây là các món tráng miệng khách sạn gợi ý cho quý khách.",
      listFood: [
        { name: "Bánh su với kem phô mai" },
        { name: "Salad trái cây tươi và vani" },
        { name: "Bánh tiramisu" },
        { name: "Bánh mochi" },
        { name: "Trái vải hạnh nhân lạnh" },
        { name: "Chè long nhân" },
      ],
      imageFood: [{ imageItem: image1 }, { imageItem: image2 }],
    },
  ];
  const dataDrink = [
    {
      title: "Cà Phê",
      listDrink: [
        { name: "Cà Phê Đen Nóng/Đá" },
        { name: "Cà Phê Sữa Nóng/Đá" },
        { name: "Cappuchino" },
        { name: "Latte" },
        { name: "Espresso" },
        { name: "Double Espresso" },
      ],
      imageDrink: image3,
    },
    {
      title: "Cà Phê",
      listDrink: [
        { name: "Cà Phê Đen Nóng/Đá" },
        { name: "Cà Phê Sữa Nóng/Đá" },
        { name: "Cappuchino" },
        { name: "Latte" },
        { name: "Espresso" },
        { name: "Double Espresso" },
      ],
      imageDrink: image3,
    },
    {
      title: "Cà Phê",
      listDrink: [
        { name: "Cà Phê Đen Nóng/Đá" },
        { name: "Cà Phê Sữa Nóng/Đá" },
        { name: "Cappuchino" },
        { name: "Latte" },
        { name: "Espresso" },
        { name: "Double Espresso" },
      ],
      imageDrink: image3,
    },
  ];
  return (
    <div className="main-screen">
      <Breadcrumb image={image} serviceDetail={serviceDetail}/>
      <ServiceDescription serviceDetail={serviceDetail}/>
      <ServiceDetail data={dataFood} dataDrink={dataDrink} />
      {/* <FoodCategory data={data}/> */}
      {/* <MenuOverview data={data}/> */}
    </div>
  );
}
