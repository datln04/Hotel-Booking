import classNames from "classnames"
import { CONSTANT } from "../../../util/constant/settingSystem"
import Styles from './MobileNavigation.module.scss'

const MobileNavigation = ({ onClick }) => {

    return (
        <div className={classNames('hs-bg-dark-8', Styles.mobileNavContainer)}>
            <div className={classNames('hs-py-16 hs-px-16')} onClick={onClick}>
                <i className="fa-solid fa-xmark hs-text-white" style={{ fontSize: 30 }}></i>
            </div>
            <div className={classNames('d-block', Styles.leftNav)}>
                {
                    CONSTANT.NAV_ITEMS.map((item, idx) => {
                        return (
                            <div key={idx} className='text-lg hs-px-16 hs-py-16'>
                                <a href={item.link} className={classNames('hs-text-dark-brown', Styles.navLink)}>{item.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileNavigation