import classNames from 'classnames'
import TextTruncate from '../../../util/utilities/text-truncate/TextTruncate'
import Styles from './HotelServiceSlide.module.scss'

const HotelServiceSlide = ({ service }) => {

    return (
        <div className={classNames('hs-text-white', Styles.slideContainer)}>
            <div className={classNames('', Styles.image)}>
                <img
                    src={service.pictureUrl}
                    alt='img'
                />
            </div>
            <div className={classNames('hs-py-24 hs-px-24 hs-text-dark-brown text-lg')}>
                <TextTruncate text={service.pictureDescription} mobile='5' desktop='4' />
            </div>
            <div className={classNames('hs-pb-16 hs-px-24 hs-text-black-grey text-md')}>
                <TextTruncate text={service.pictureDescription} mobile='5' desktop='4' />
            </div>
        </div>
    )
}

export default HotelServiceSlide