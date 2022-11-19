/* eslint-disable jsx-a11y/heading-has-content */
import classNames from "classnames"
import { CONSTANT } from "../../../util/constant/settingSystem";
import Styles from './IntroduceHotel.module.scss'

const IntroduceHotel = () => {

    // todo: call api here and pass response to data
    //---------------> call api

    const data = CONSTANT.INTRODUCE;

    return (
        <div className={classNames('hs-bg-dark-9 hs-py-32', Styles.introduceContainer)}>
            <div className='text-xl hs-text-grey'>
                {data.hotel_title}
            </div>
            <div className={classNames('text-xl hs-text-white hs-py-24', Styles.title)}>
                {data.welcome_label}
            </div>
            <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr1)} />
            <div className={classNames('hs-text-black-grey hs-py-24', Styles.description)}>
                <p>
                    {data.description}
                </p>
            </div>
            <div className={classNames('')}>
                <p className="text-lg">
                    <a href="/" className="hs-text-dark-brown">
                        {data.detail_label}
                    </a>
                </p>
            </div>
            <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr2)} />
        </div>
    )
}

export default IntroduceHotel