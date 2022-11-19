
import classNames from 'classnames';
import React from 'react'
import Styles from './CustomerFeedback.module.scss'
import backgroundImage from './../../../assets/images/feedback.jpg'
import datImage from './../../../assets/images/dat.jpg'
import thucImage from './../../../assets/images/thuc.jpg'
import longImage from './../../../assets/images/long.jpg'
import sonImage from './../../../assets/images/son.jpg'
import duongImage from './../../../assets/images/duong.jpg'
import Slider from 'react-slick';
import Feedback from './Feedback/Feedback';
// import './style.css'


const CustomerFeedback = () => {
    const title = 'Khách hàng nói gì về chúng tôi'

    const data = [
        {
            imageUrl: datImage,
            name: 'Anh Đạt',
            feedback: 'Tôi đã có một đêm rất tuyệt vời tại đây, sẽ giới thiệu bạn bè đến trãi nghiệm.'
        },
        {
            imageUrl: thucImage,
            name: 'Anh Thức Và Người Yêu',
            feedback: 'Bạn gái tôi rất ưng chỗ này, thoáng đãng, thích hợp cho các cặp đôi'
        },
        {
            imageUrl: longImage,
            name: 'Anh Long',
            feedback: 'Tất cả những trãi nghiệm ở đây tôi không thể nào quên được. Cám ơn nhân viên rất nhiều.'
        },
        {
            imageUrl: sonImage,
            name: 'Anh Sơn',
            feedback: 'Khách sạn đem lại cho tôi những trãi nghiệm tuyện vời, tôi sẽ quay lại.'
        },
        {
            imageUrl: duongImage,
            name: 'Anh Dương',
            feedback: 'Tuyệt.'
        },
    ]

    const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props;

        return (
            <div {...props} className="custom-prevArrow" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </div>
        );
    };

    const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props;

        return (
            <div className="custom-nextArrow d-none d-lg-flex" onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={classNames('d-block ', Styles.customerFeedbackContainer)} style={{ '--backgroundImage': `url(${backgroundImage})` }}>
            <div className='hs-text-white hs-py-32 hs-py-lg-48 text-center text-lg'>
                {title}
            </div>
            <div className='d-flex justify-content-center'>
                <div className='col-12 col-lg-10'>
                    <Slider {...settings}>
                        {data.map((item, idx) => (
                            <Feedback {...item} key={idx} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CustomerFeedback
