import React, { useEffect } from "react";
import Styles from "./Contact.module.scss";
import classNames from "classnames";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      className={classNames(
        "col-12 hs-bg-dark d-flex justify-content-center hs-py-48",
        Styles.contactContainer
      )}
    >
      <div className="col-10">
        <div className={Styles.contactImage}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5532885234948!2d106.79199195063917!3d10.845457492236825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527157c90def5%3A0x8cfc6a3a0cf54e6d!2zxJAuIEzDqiBWxINuIFZp4buHdCwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1669613950202!5m2!1sen!2s"
            width="1449"
            height="651"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className={classNames("hs-pt-64 ", Styles.contactContent)}>
          <div className="col-12 d-flex justify-content-between">
            <div className="col-5">
              <div className="hs-text-white text-lg">
                ĐÓNG GÓP Ý KIẾN HOẶC KIẾU NẠI
              </div>
              <div className="hs-text-dark-grey">
                Mọi ý kiến đóng góp của quý khách rất quý giá với chúng tôi.
                Nhằm mục đích nâng cao trãi nghiệm và cải thiện dịch vụ một cách
                tốt nhất.
              </div>
            </div>
            <div className="col-5">
              <div className="hs-text-white text-lg">THÔNG TIN LIÊN HỆ</div>
              <div className="hs-text-dark-grey">
                Liên hệ với chúng tôi để được tư vấn và nhận được những ưu đãi
                sớm nhất.
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between ">
            <div className="col-5">
              <form className="hs-py-8 col-12 d-block">
                <div className="hs-py-16">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className={classNames(
                      "hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12",
                      Styles.formInput
                    )}
                  />
                </div>
                <div className="hs-py-16">
                  <input
                    type="email"
                    placeholder="Email"
                    className={classNames(
                      "hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12",
                      Styles.formInput
                    )}
                  />
                </div>
                <div className="hs-py-16">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className={classNames(
                      "hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12",
                      Styles.formInput
                    )}
                  />
                </div>
                <div className="hs-py-16">
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className={classNames(
                      "hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12",
                      Styles.formInput
                    )}
                  />
                </div>
                <div className="hs-py-16">
                  <textarea
                    placeholder="Lời nhắn"
                    className={classNames(
                      "hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12",
                      Styles.formArea
                    )}
                  />
                </div>
                <div className="hs-py-16 d-flex justify-content-center">
                  <button
                    className={classNames(
                      "hs-bg-dark-brown text-lg hs-text-white hs-py-8 button",
                      Styles.contactBtn
                    )}
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
            <div className="col-5">
              <div className="hs-py-8 col-12 d-block">
                <div className="hs-py-16 d-flex hs-text-white text-lg">
                  <i className="fa-solid fa-location-dot hs-pr-16"></i>
                  <p className="hs-text-dark-grey">
                    218 Lê Văn Việt, Quận 9, TP. Thủ Đức
                  </p>
                </div>
                <div className="hs-py-16 d-flex hs-text-white text-lg">
                  <i className="fa-solid fa-phone hs-pr-16"></i>
                  <p className="hs-text-dark-grey">086 939 3979</p>
                </div>
                <div className="hs-py-16 d-flex hs-text-white text-lg">
                  <i className="fa-regular fa-envelope hs-pr-16"></i>
                  <p className="hs-text-dark-grey">
                    fivemencontact@fivemen.com
                  </p>
                </div>
                <div className="hs-py-96">
                  <p className="hs-text-white text-lg hs-py-8">THEO DÕI</p>
                  <i className="fa-brands fa-facebook hs-text-dark-grey text-xl hs-pr-32"></i>
                  <i className="fa-brands fa-instagram hs-text-dark-grey text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
