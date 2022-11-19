import classNames from "classnames"
import Styles from './introduce-page-custom.module.scss'

const IntroducePageCustom = ({ data, classNameHr = undefined, classNameContainer = undefined }) => {

    return (
        <div className={classNames('col-8 col-lg-10', classNameContainer)}>
            <div className={classNames('hs-py-32', Styles.introduceContainer)}>
                {
                    data.hotel_title && <div className='text-xl hs-text-grey'>
                        {data.hotel_title}
                    </div>
                }
                {
                    data.welcome_label &&
                    <div className='text-xl hs-text-white hs-py-24'>
                        {data.welcome_label}
                    </div>
                }

                <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr1, classNameHr)} />
                {
                    data.description &&
                    <div className={classNames('hs-text-black-grey hs-py-lg-32 hs-py-16', Styles.description)}>
                        <p>
                            {data.description}
                        </p>
                    </div>
                }
                {
                    data.detail_label && (
                        <div>
                            <p className="text-lg">
                                <a href="/" className="hs-text-dark-brown">
                                    {data.detail_label}
                                </a>
                            </p>
                            <hr className={classNames('hs-text-dark-brown hs-mt-8', Styles.hr2, classNameHr)} />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default IntroducePageCustom