/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import Styles from './NewsComponent.module.scss'

import imageCoupon1 from './../../assets/images/news/khuyenmai1.jpg';
import imageCoupon2 from './../../assets/images/news/Khuyenmai2.jpg';

import imageDestination1 from './../../assets/images/news/chobenthanh.jpg';
import imageDestination2 from './../../assets/images/news/bao-tang-chung-tich-chien-tranh.jpg';
import imageDestination3 from './../../assets/images/news/thapbitexco.png';

import imageEvent1 from './../../assets/images/news/event1.png';
import imageEvent2 from './../../assets/images/news/event2.png';
import imageEvent3 from './../../assets/images/news/event3.png';
import TextTruncate from '../../util/utilities/text-truncate/TextTruncate';

const NewsComponent = () => {
    const globalTab = {
        coupon: 'Tin khuyến mãi',
        destination: 'Các địa điểm tham quan',
        event: 'Sự kiện'
    }

    const eventTab = {
        present: 'Đang diễn ra',
        future: 'Sắp diễn ra',
        pass: 'Đã diễn ra'
    }

    const [currentGlobalTab, setCurrentGlobalTab] = useState(Object.keys(globalTab)[0])
    const [currentEventTab, setCurrentEventTab] = useState(null)

    const couponData = [
        {
            imageUrl: imageCoupon1,
            title: 'Party Combo 3',
            hightLight: 'Combo 3 dành cho 4 đến 6 người ăn nay với mức giá ưu đãi chỉ còn 999.000 VND',
            description: '+ Chả giò Hoàng Kim (size M) \n + Súp cua hoa trùng thào (size M) \n + Sườn heo nướng mật ong rừng (size M) \n + Cơm chiên cá mặn gà xé (size M) \n + Tôm sốt trứng muối (size M)',
        },
        {
            imageUrl: imageCoupon2,
            title: 'Combo Chất Ngất',
            hightLight: 'Combo chất ngất với đa dạng món ăn và nước uống sẽ giúp quý khách có một bữa ăn đầy đủ...',
            description: '+ Chả giò Hoàng Kim (size M) \n + Súp cua hoa trùng thào (size M) \n + Sườn heo nướng mật ong rừng (size M) \n + Cơm chiên cá mặn gà xé (size M) \n + Tôm sốt trứng muối (size M)',
        },
    ]

    const destinationData = [
        {
            imageUrl: imageDestination1,
            title: 'Chợ Bến Thành',
            description: 'Theo Vương Hồng Sển, tác giả của cuốn sách ‘Sài Gòn năm xưa’ năm 1912, người Pháp đã lấp hồ Boresse, có diện tích khoảng 12.000m2 và xây dựng một khu chợ trên đó. Chợ nằm sát bến cảng (Bến) của Sài Gòn xưa (Thành), do đó được đặt tên là Bến Thành. ',
            dateTime: '08:00 - 19:00',
            location: 'Chợ Bến Thành nằm ở ngã tư Lê Lợi, Hàm Nghi, Trần Hưng Đạo và Lê Lai.'
        },
        {
            imageUrl: imageDestination2,
            title: 'Bảo Tàng Chứng tích chiến tranh',
            description: 'Được quản lý bởi nhà nước, bảo tàng được khai trương vào tháng 9 năm 1975 với tên là ‘Nhà trưng bày tội ác chiến tranh’, tập trung vào các cuộc triển lãm liên quan đến giai đoạn chiến tranh Việt Nam với Mỹ. Kể từ đó, nơi đây đã trải qua nhiều thay đổi và làm mới do quá trình bình thường hóa quan hệ giữa Việt Nam và Hoa Kỳ, như thay đổi tên bảo tàng vào năm 1993.',
            dateTime: '07:30 - 18:00',
            location: 'Chợ Bến Thành nằm ở ngã tư Lê Lợi, Hàm Nghi, Trần Hưng Đạo và Lê Lai.'
        },
        {
            imageUrl: imageDestination3,
            title: 'Tháp Bitexco',
            description: 'Tháp Bitexco Financial Sky & Sky Deck tại Thành phố Hồ Chí Minh cao 262 mét tại trung tâm thành phố và cung cấp cho du khách một cái nhìn thành phố tuyệt vời từ Sky Deck. Được thiết kế bởi kiến trúc sư nổi tiếng người Mỹ Carlos Zapata',
            dateTime: 'Giờ mở cửa: Sky Deck mở cửa hàng ngày từ 09:30 - 21:30',
            location: '36 Hồ Tùng Mậu, quận 1, Thành phố Hồ Chí Minh'
        },
    ]

    const eventData = [
        {
            imageUrl: imageEvent1,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'VMARK Tuần Lễ Thiết Kế Nội Thất Việt Nam 2022',
            startDate: '07/10/2022',
            endDate: '10/10/2022',
            startTime: '07:00',
            endTime: '23:00',
            status: 'present',
            view: 200,
        },
        {
            imageUrl: imageEvent2,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'Vietnam Motor Show 2022 - Triển lãm Ô Tô Việt Nam',
            startDate: '01/10/2022',
            endDate: '01/10/2022',
            startTime: '07:00',
            endTime: '23:30',
            status: 'pass',
            view: 300,
        },
        {
            imageUrl: imageEvent3,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'THE COFFEE EXPO VIETNAM 2022 - Triển lãm Quốc tế Cà Phê, Bánh và Trà tại Việt Nam',
            startDate: '20/10/2022',
            endDate: '30/10/2022',
            startTime: '07:00',
            endTime: '19:00',
            status: 'future',
            view: 210,
        },
        {
            imageUrl: imageEvent3,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'THE COFFEE EXPO VIETNAM 2022 - Triển lãm Quốc tế Cà Phê, Bánh và Trà tại Việt Nam',
            startDate: '20/10/2022',
            endDate: '30/10/2022',
            startTime: '07:00',
            endTime: '19:00',
            status: 'future',
            view: 210,
        },
        {
            imageUrl: imageEvent3,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'THE COFFEE EXPO VIETNAM 2022 - Triển lãm Quốc tế Cà Phê, Bánh và Trà tại Việt Nam',
            startDate: '02/10/2022',
            endDate: '03/10/2022',
            startTime: '07:00',
            endTime: '19:00',
            status: 'pass',
            view: 210,
        },
        {
            imageUrl: imageEvent3,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'THE COFFEE EXPO VIETNAM 2022 - Triển lãm Quốc tế Cà Phê, Bánh và Trà tại Việt Nam',
            startDate: '08/10/2022',
            endDate: '08/10/2022',
            startTime: '07:00',
            endTime: '19:00',
            status: 'present',
            view: 210,
        },
        {
            imageUrl: imageEvent3,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'THE COFFEE EXPO VIETNAM 2022 - Triển lãm Quốc tế Cà Phê, Bánh và Trà tại Việt Nam',
            startDate: '20/07/2022',
            endDate: '01/08/2022',
            startTime: '07:00',
            endTime: '19:00',
            status: 'pass',
            view: 210,
        },
        {
            imageUrl: imageEvent2,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'Vietnam Motor Show 2022 - Triển lãm Ô Tô Việt Nam',
            startDate: '01/10/2022',
            endDate: '01/10/2022',
            startTime: '07:00',
            endTime: '23:30',
            status: 'pass',
            view: 300,
        },
        {
            imageUrl: imageEvent2,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'Vietnam Motor Show 2022 - Triển lãm Ô Tô Việt Nam',
            startDate: '01/10/2022',
            endDate: '01/10/2022',
            startTime: '07:00',
            endTime: '23:30',
            status: 'pass',
            view: 300,
        },
        {
            imageUrl: imageEvent2,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'Vietnam Motor Show 2022 - Triển lãm Ô Tô Việt Nam',
            startDate: '01/10/2022',
            endDate: '01/10/2022',
            startTime: '07:00',
            endTime: '23:30',
            status: 'pass',
            view: 300,
        },
        {
            imageUrl: imageEvent2,
            ticket: 'Vào cổng tự do',
            location: 'Hồ Chí Minh',
            title: 'Vietnam Motor Show 2022 - Triển lãm Ô Tô Việt Nam',
            startDate: '01/10/2022',
            endDate: '01/10/2022',
            startTime: '07:00',
            endTime: '23:30',
            status: 'pass',
            view: 300,
        },
    ]

    const ENTRY_TYPE = {
        coupon: 'coupon',
        destination: 'destination',
        event: 'event'
    }

    const renderGlobalTab = useCallback(() => {
        switch (currentGlobalTab) {
            case ENTRY_TYPE.coupon:
                return renderCoupon();
            case ENTRY_TYPE.destination:
                return renderDestination();
            case ENTRY_TYPE.event:
                return renderEvent();
            default:
                return null;
        }
    }, [currentGlobalTab, currentEventTab])

    const renderCoupon = () => {
        return (
            <div className='col-10 row d-flex justify-content-space-between'>
                {
                    couponData.map((coupon, idx) => {
                        return (
                            <div className='col-6 hs-px-64' key={idx}>
                                <div className={Styles.newsImageCoupon}>
                                    <img src={coupon.imageUrl} alt={coupon.title} />
                                </div>
                                <div className='hs-py-16'>
                                    {coupon.title}
                                </div>
                                <div className='hs-text-black-grey'>
                                    <TextTruncate text={coupon.hightLight} mobile={3} desktop={3} />
                                </div>
                                <div className='hs-py-16'>
                                    <a href='/news' className='hs-text-dark-brown'>Xem chi tiết +</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const renderDestination = () => {
        return (
            <div className='col-10'>
                {
                    destinationData.map((des, idx) => {
                        return (
                            <div className='hs-pb-32 row' key={idx}>
                                <div key={idx} className={classNames('col-4', Styles.newsImageDes)}>
                                    <img src={des.imageUrl} alt={des.title} />
                                </div>
                                <div className='col-7'>
                                    <div className='text-lg'>
                                        {idx + 1}. {des.title}
                                    </div>
                                    <div className='hs-text-dark-grey hs-py-16'>
                                        {des.description}
                                    </div>
                                    <div className='hs-text-dark-grey hs-py-16'>
                                        Giờ mở cửa: {des.dateTime}
                                    </div>
                                    <div className='hs-text-dark-grey'>
                                        Vị trí: {des.location}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const SUB_EVENT = {
        present: 'present',
        future: 'future',
        pass: 'pass'
    }

    const renderTab = (ev) => {
        const startDateTime = new Date(ev.startDate).getTime();
        const endDateTIme = new Date(ev.endDate).getTime();

        const isCurrentTab = currentEventTab === ev.status;

        return (
            isCurrentTab ? (
                <div className='col-6 hs-px-32 hs-py-24'>
                    <div className={classNames('hs-bg-dark col-12 rounded', Styles.subEventTabContainer)}>
                        <div className={Styles.subEventImage} style={{ '--backgroundImage': `url(${ev.imageUrl})` }}>
                            <div className={classNames('hs-text-dark-brown hs-bg-grey-6 hs-px-16', Styles.overlayText)}>
                                {ev.ticket}
                            </div>
                        </div>
                        <div className='hs-px-16 hs-py-8'>
                            <div className='hs-text-dark-grey'>
                                {ev.location}
                            </div>
                            <div className=''>
                                <TextTruncate text={ev.title} desktop={3} mobile={3} />
                            </div>
                            <div className={classNames('col-12 hs-py-8', Styles.subContentTab)}>
                                <div className='row d-flex'>
                                    <div className='hs-text-dark-grey col-8'>
                                        <i className="fa-regular fa-clock hs-pr-8"></i>
                                        {ev.startTime}{' - ' + ev.endTime}
                                    </div>
                                    <div className='hs-text-dark-grey col-4'>
                                        <i className="fa-regular fa-eye hs-pr-8"></i>
                                        {ev.view}
                                    </div>
                                </div>
                                <div className='hs-text-dark-grey'>
                                    <i className="fa-regular fa-calendar hs-pr-8"></i>
                                    {ev.startDate}{startDateTime !== endDateTIme ? (' - ' + ev.endDate) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
        )
    }

    const renderSubEvent = (ev) => {
        // var currentTime = new Date().getTime();

        // const dateArray = ev.dateTime.split("_");
        // const timeArray = dateArray[1].split("-");

        // const [hoursStart, minutesStart] = timeArray[0].split(':');
        // const [hoursEnd, minutesEnd] = timeArray[1].split(':');
        // const [day, month, year] = dateArray[0].split('/');

        // const startTime = new Date(+year, month - 1, +day, +hoursStart, +minutesStart, +'00').getTime();
        // const endTime = new Date(+year, month - 1, +day, +hoursEnd, +minutesEnd, +'00').getTime();

        // if (currentTime < startTime && SUB_EVENT.future === currentEventTab) {
        //     return renderTab(ev)
        // } if (currentTime > endTime && SUB_EVENT.pass === currentEventTab) {
        //     return renderTab(ev)
        // } if (currentTime > startTime && currentTime < endTime && SUB_EVENT.present === currentEventTab) {
        //     return renderTab(ev)
        // }

        switch (currentEventTab) {
            case SUB_EVENT.pass:
                return renderTab(ev);
            case SUB_EVENT.present:
                return renderTab(ev);
            case SUB_EVENT.future:
                return renderTab(ev);
            default:
                return null;
        }

    }

    const renderEvent = () => {
        return (
            <div className='col-10'>
                <div className='d-flex'>
                    {
                        Object.entries(eventTab).map(([key, value], index) => {
                            return (
                                <div key={index} className={classNames('col-2 text-center hs-py-4', Styles.tabGlobalMenu, currentEventTab === key ? 'hs-bg-dark-9 hs-text-white' : 'hs-text-dark-grey')} onClick={() => setCurrentEventTab(key)}>
                                    <p>{value}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classNames('hs-bg-dark-9 hs-px-0', Styles.subEventContainer)}>
                    <div className='row d-flex'>
                        {
                            eventData.map((ev, idx) => {
                                return (
                                    <>
                                        {renderSubEvent(ev)}
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }

    const handleChangeGlobalTab = (key) => {
        if (key === ENTRY_TYPE.event) {
            setCurrentEventTab(Object.keys(eventTab)[0])
        }
        setCurrentGlobalTab(key)
    }

    return (
        <div className={classNames('col-12 d-flex hs-bg-dark hs-py-64 d-flex justify-content-center', Styles.newsContainer)}>
            <div className='col-10 d-flex row'>
                <div className='col-2'>
                    {
                        Object.entries(globalTab).map(([key, value], index) => {
                            return (
                                <div key={index} className={classNames('hs-py-16', Styles.tabGlobalMenu, currentGlobalTab === key ? 'hs-text-dark-brown' : 'hs-text-white')} onClick={() => handleChangeGlobalTab(key)}>
                                    <p>{value}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classNames('col-10', Styles.rightContent)}>
                    <div className='col-12 d-flex justify-content-center hs-text-white'>
                        {renderGlobalTab()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsComponent
