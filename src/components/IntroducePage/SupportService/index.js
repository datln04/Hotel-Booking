import React from "react";
import "./style.css";
export default function SupportService() {
  const loopWithClassName = (className) => {
    for (var i = 0; i < className.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = className[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        className[i].classList.add("active");
      } else {
        className[i].classList.remove("active");
      }
    }
  };

  const reveal = () => {
    var support_service_item_title = document.querySelectorAll(
      ".support_service_item_title"
    );
    var fa_solid = document.getElementsByTagName("i");
    var support_service_item_detail = document.querySelectorAll(
      ".support_service_item_detail"
    );
    var revealImg2 = document.querySelectorAll(".revealImg2");
    var revealImg3 = document.querySelectorAll(".revealImg3");
    loopWithClassName(support_service_item_title);
    loopWithClassName(fa_solid);
    loopWithClassName(support_service_item_detail);
    loopWithClassName(revealImg2);
    loopWithClassName(revealImg3);
  };
  window.addEventListener("scroll", reveal);
  return (
    <div className="support_service">
      <div className="container">
        <div className="row">
          <div className="support_service_item col-4">
            <i class="fa-solid fa-wifi"></i>
            <p className="support_service_item_title">Wifi phủ rộng</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
          <div className="support_service_item col-4">
            <i class="fa-solid fa-square-parking"></i>
            <p className="support_service_item_title">Bãi đổ xe rộng</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
          <div className="support_service_item col-4">
            <i class="fa-solid fa-suitcase-rolling"></i>
            <p className="support_service_item_title">Vận chuyển hành lý</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
          <div className="support_service_item col-4">
            <i class="fa-solid fa-video"></i>
            <p className="support_service_item_title">Camera an ninh</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
          <div className="support_service_item col-4">
            <i class="fa-solid fa-bus"></i>
            <p className="support_service_item_title">Hỗ trợ vận chuyển</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
          <div className="support_service_item col-4">
            <i class="fa-solid fa-plane-departure"></i>
            <p className="support_service_item_title">Hỗ trợ đặt vé</p>
            <p className="support_service_item_detail">
              Một trong những yếu tố hàng đầu để những chuyến công tác của bạn
              trở nên nhẹ nhàng, thoải mái.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
