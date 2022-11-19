import classNames from 'classnames'
import React from 'react'
import { CONSTANT } from '../../../util/constant/settingSystem'
import Styles from './Footer.module.scss'

const Footer = () => {

    const footerContact = {
        location: 'Đại Học FPT, quận 9',
        contact: '0344656907',
        email: 'fivemencontact@fivemen.com'
    }

    return (
        <div className='d-flex justify-content-center align-items-center hs-bg-dark-9'>
            <div className='col-12 col-lg-10 d-block d-md-flex hs-py-32 hs-px-32'>
                <div className='col-12 col-md-6 col-lg-4 hs-px-lg-24'>
                    <div className='hs-text-white text-lg hs-py-8'>
                        {CONSTANT.HOTEL_NAME}
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        <i className="fa-solid fa-location-dot hs-pr-16"></i> {footerContact.location}
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        <i className="fa-solid fa-phone hs-pr-16"></i> {footerContact.contact}
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        <i className="fa-solid fa-envelope hs-pr-16"></i> {footerContact.email}
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-5 hs-py-24 hs-py-md-0 hs-px-lg-24'>
                    <div className='hs-text-white text-lg hs-py-8 text-uppercase'>
                        Đăng Ký
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        Đăng ký để nhận được thông tin mới nhất từ chúng tôi
                    </div>
                    <div className={classNames('hs-bg-white d-flex col-9', Styles.form)}>
                        <form className='hs-py-8 col-12'>
                            <input type="email" name="email" placeholder="Email...." className={classNames('hs-text-dark-grey col-11 hs-pl-8', Styles.inputForm)} />
                            <button type="submit" className='border-0'>
                                <i className="fa-solid fa-arrow-right hs-text-dark-grey text-md hs-bg-white"></i>
                            </button>
                        </form>
                    </div>
                    <div className='hs-py-8'>
                        <i className="fa-brands fa-facebook hs-text-dark-grey text-xl hs-pr-32"></i>
                        <i className="fa-brands fa-instagram hs-text-dark-grey text-xl"></i>
                    </div>
                </div>
                <div className='col-12 col-lg-3 hs-px-24 d-none d-lg-block'>
                    <div className='hs-text-white text-lg hs-py-8 text-uppercase'>
                        Hỗ trợ
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        Đặt phòng và thanh toán
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        Điều khoản sử dụng
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        Chính sách bảo mật
                    </div>
                    <div className='hs-text-dark-grey hs-py-8 text-md'>
                        Câu hỏi thường gặp
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
