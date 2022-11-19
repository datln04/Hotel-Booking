import classNames from "classnames"
import IntroducePageCustom from "../../../util/utilities/introduce-page/introduce-page-custom"
import Styles from './WelcomeComponent.module.scss'
import image from './../../../assets/images/receiption.jpg'

const WelcomeComponent = () => {

    const data = {
        hotel_title: '5 Men Hotel',
        welcome_label: 'CHÀO MỪNG ĐẾN VỚI CHÚNG TÔI',
        description: 'Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú' +
            'trong suốt thời gian đi công tác. Những khách sạn sang trọng với nhiều dịch vụ cao cấp, gần trung tâm và nơi công tác vừa giúp cho bạn được thư thả,' +
            'tận hưởng thời gian nghỉ ngơi.'
    }

    return (
        <div className={classNames('col-12 hs-bg-dark', Styles.welcomeContainer)}>
            <div className="d-flex">
                <div className={classNames('col-lg-7 col-12 d-flex justify-content-center hs-pl-lg-96')}>
                    <IntroducePageCustom data={data} classNameHr='hs-mx-0' classNameContainer={Styles.customIntroduce} />
                </div>
                <div className={classNames('col-5 d-none d-lg-block hs-my-48 hs-py-32', Styles.imageContainer)} style={{ '--backgroundImage': `url(${image})` }}>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent