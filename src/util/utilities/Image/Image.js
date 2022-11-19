import classNames from "classnames";
import { CONSTANT } from "../../constant/settingSystem";
import Styles from './image.module.scss'

const Image = ({ className, src, alt, width = '100%', height = 'auto', imageType = 'backgroundImage' }) => {

    const background_image = () => {
        // const backgroundSrc = `url(${src})`
        return (
            <img src={src} alt={alt} width={width} height={height} className={classNames(className, Styles.backgroundImage)} />
        )
    }

    const image = () => {
        return (
            <img src={src} alt={alt} width={width} height={height} className={classNames('Image', className)} />
        )
    }

    const pic = () => {
        switch (imageType) {
            case CONSTANT.Background_TYPE.background_image:
                return background_image();
            case CONSTANT.Background_TYPE.image:
                return image();
            default:
                break;
        }
    }

    return (pic())
}

export default Image;