import classNames from 'classnames'
import React from 'react'
import Styles from './GainComponent.module.scss'

const GainComponent = () => {
    const data = [
        {
            icon: 'fa-solid fa-wifi',
            title: 'Wifi phủ rộng',
            description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
        {
            icon: 'fa-solid fa-square-parking',
            title: 'Bãi đổ xe rộng',
            description: ' Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
        {
            icon: 'fa-solid fa-suitcase-rolling',
            title: 'Vận chuyển hành lý',
            description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
        {
            icon: 'fa-solid fa-video',
            title: 'Camera an ninh',
            description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
        {
            icon: 'fa-solid fa-bus',
            title: 'Hỗ trợ vận chuyển',
            description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
        {
            icon: 'fa-solid fa-plane-departure',
            title: 'Hỗ trợ đặt vé',
            description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái.'
        },
    ]

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
        <div className={classNames('col-12 hs-bg-dark d-flex justify-content-center align-items-center text-center text-md-start', Styles.gainContainer)}>
            <div className='col-12 col-lg-9 row '>
                {data && data.map((item, idx) => {
                    return (
                        <div className='col-6 col-lg-4 hs-px-lg-48 hs-py-32 ' key={idx}>
                            <div className={classNames('hs-text-dark-brown', Styles.icon)}>
                                <i className={classNames('text-xl', item.icon)}></i>
                            </div>
                            <div className={classNames('hs-text-white hs-py-16', Styles.title)}>{item.title}</div>
                            <div className={classNames('hs-text-black-grey d-none d-md-block', Styles.description)}>{item.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GainComponent
