import React from 'react'
import Styles from './Contact.module.scss'
import mapImage from './../../../assets/images/contact/map.svg'
import classNames from 'classnames'

const Contact = () => {
    return (
        <div className={classNames('col-12 hs-bg-dark d-flex justify-content-center hs-py-48', Styles.contactContainer)}>
            <div className='col-10'>
                <div className={Styles.contactImage}>
                    <img src={mapImage} alt='map' />
                </div>
                <div className={classNames('hs-pt-64 ', Styles.contactContent)}>
                    <div className='col-12 d-flex justify-content-between'>
                        <div className='col-5'>
                            <div className='hs-text-white text-lg'>
                                ĐÓNG GÓP Ý KIẾN HOẶC KIẾU NẠI
                            </div>
                            <div className='hs-text-dark-grey'>
                                Mọi ý kiến đóng góp của quý khách rất quý giá với chúng tôi. Nhằm mục đích nâng cao trãi nghiệm và cải thiện dịch vụ một cách tốt nhất.
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='hs-text-white text-lg'>
                                THÔNG TIN LIÊN HỆ
                            </div>
                            <div className='hs-text-dark-grey'>
                                Liên hệ với chúng tôi để được tư vấn và nhận được những ưu đãi sớm nhất.
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex justify-content-between '>
                        <div className='col-5'>
                            <form className='hs-py-8 col-12 d-block'>
                                <div className='hs-py-16'>
                                    <input type="text" placeholder="Họ và tên" className={classNames('hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12', Styles.formInput)} />
                                </div>
                                <div className='hs-py-16'>
                                    <input type="email" placeholder="Email" className={classNames('hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12', Styles.formInput)} />
                                </div>
                                <div className='hs-py-16'>
                                    <input type="text" placeholder="Số điện thoại" className={classNames('hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12', Styles.formInput)} />
                                </div>
                                <div className='hs-py-16'>
                                    <input type="text" placeholder="Địa chỉ" className={classNames('hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12', Styles.formInput)} />
                                </div>
                                <div className='hs-py-16'>
                                    <textarea placeholder="Lời nhắn" className={classNames('hs-py-16 hs-px-16 hs-text-dark-grey hs-bg-dark col-12', Styles.formArea)} />
                                </div>
                                <div className='hs-py-16 d-flex justify-content-center'>
                                    <button className={classNames('hs-bg-dark-brown text-lg hs-text-white hs-py-8', Styles.contactBtn)}>Gửi</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-5'>
                            <div className='hs-py-8 col-12 d-block'>
                                <div className='hs-py-16 d-flex hs-text-white text-lg'>
                                    <i className="fa-solid fa-location-dot hs-pr-16"></i>
                                    <p className='hs-text-dark-grey'>218 Lê Văn Việt, Quận 9, TP. Thủ Đức</p>
                                </div>
                                <div className='hs-py-16 d-flex hs-text-white text-lg'>
                                    <i class="fa-solid fa-phone hs-pr-16"></i>
                                    <p className='hs-text-dark-grey'>086 939 3979</p>
                                </div>
                                <div className='hs-py-16 d-flex hs-text-white text-lg'>
                                    <i class="fa-regular fa-envelope hs-pr-16"></i>
                                    <p className='hs-text-dark-grey'>fivemencontact@fivemen.com</p>
                                </div>
                                <div className='hs-py-96'>
                                    <p className='hs-text-white text-lg hs-py-8'>THEO DÕI</p>
                                    <i className="fa-brands fa-facebook hs-text-dark-grey text-xl hs-pr-32"></i>
                                    <i className="fa-brands fa-instagram hs-text-dark-grey text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
