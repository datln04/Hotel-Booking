import { ReactComponent as sandalIcon } from "./../../assets/images/sandal.svg";
import { ReactComponent as airConditionerIcon } from "./../../assets/images/air-conditioner.svg";
import { ReactComponent as wardrobeIcon } from "./../../assets/images/wardrobe.svg";
import { ReactComponent as fridgeIcon } from "./../../assets/images/fridge.svg";
import { ReactComponent as wifiIcon } from "./../../assets/images/wifi.svg";

// export const DOMAIN = "https://hotelservice-v5.herokuapp.com/api";
export const DOMAIN = "http://localhost:8080/api";
export const TOKEN = "access_token";
export const USER_LOGIN = "USER_LOGIN";
export const STATUS_CODE = {
  SUCCESS: 200,
};

export const CONSTANT = {
  NAV_RECOMMEND: "Nhiều Chương Trình Khuyến Mãi Dành Riêng Cho Bạn",
  NAV_BTN: "Khám phá ngay",

  NUM_BOOKING_ROOM: "Number_Of_Booking_Room",

  HOTEL_NAME: "5 Men Hotel",

  ROOM_VALIDATE: "/RoomValidate",

  NAV_HIDE_ITEMS: [{ name: "Kiểm Tra Phòng Trống", link: "/RoomValidate" }],

  NAV_ITEMS: [
    {
      name: "TRANG CHỦ",
      link: "/home",
    },
    {
      name: "GIỚI THIỆU",
      link: "/introduce",
    },
    {
      name: "PHÒNG",
      link: "/room",
    },
    {
      name: "DỊCH VỤ",
      link: "/service",
    },
    {
      name: "TIN TỨC",
      link: "/news",
    },
    {
      name: "LIÊN HỆ",
      link: "/contact",
    },
  ],

  Background_TYPE: {
    background_image: "backgroundImage",
    image: "image",
  },

  INTRODUCE: {
    hotel_title: "5 Men Hotel",
    welcome_label: "CHÀO MỪNG ĐẾN VỚI CHÚNG TÔI",
    description:
      "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú" +
      "trong suốt thời gian đi công tác. Những khách sạn sang trọng với nhiều dịch vụ cao cấp, gần trung tâm và nơi công tác vừa giúp cho bạn được thư thả," +
      "tận hưởng thời gian nghỉ ngơi.",
    detail_label: " Xem chi tiết",
  },
  ROOMTYPE: {
    description:
      "Với mục tiêu đem lại cảm giác thoãi mái và tiện nghi hệ thống phòng của chúng tôi được đầu tư kĩ lưỡng cùng với đội ngũ nhân viên tận tình, chuyên nghiệp. Nơi quý khách có thể làm việc, thư giản, nơi mà chất lượng phục vụ, dịch vụ luôn được chú trọng để đem lại cho quý khách cảm thấy đáng giá khi lưu trú tại 5 Men Hotel.",
  },

  ICONS: [
    {
      name: "Dép trong nhà",
      src: sandalIcon,
    },
    {
      name: "Điện thoại",
      src: "fa-solid fa-phone",
    },
    {
      name: "Điều hòa",
      src: airConditionerIcon,
    },
    {
      name: "Tivi",
      src: "fa-solid fa-tv",
    },
    {
      name: "Tủ quần áo",
      src: wardrobeIcon,
    },
    {
      name: "Tủ lạnh",
      src: fridgeIcon,
    },
    {
      name: "Wifi",
      src: wifiIcon,
    },
  ],
};
