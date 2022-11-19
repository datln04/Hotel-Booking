import classNames from "classnames"
import { CONSTANT } from "../../../util/constant/settingSystem";
import IntroducePageCustom from "../../../util/utilities/introduce-page/introduce-page-custom";
import Styles from './OverviewRoom.module.scss'

const OverviewRoom = () => {

    const data = CONSTANT.INTRODUCE;

    return (
        <div className={classNames('col-12', Styles.overviewRoomContainer)} style={{ '--backgroundImage': `url(${'https://i.ibb.co/Tvn99dK/background.jpg'})` }}>
            <div className="col-12 row d-block d-lg-flex hs-py-64">
                <div className={classNames('col-6 hs-px-64 d-none d-lg-block', Styles.leftOverview)}>
                    <div className={Styles.imageMiddle}>
                        <img
                            src="https://i.ibb.co/Csg8Vvy/stick1.jpg"
                            className={classNames('', Styles.overviewRoomImage1)}
                            alt=""
                        ></img>
                    </div>
                    <div className={Styles.image}>
                        <img
                            src="https://i.ibb.co/3Ryrcg8/stick2.jpg"
                            className={Styles.overviewRoomImage2}
                            alt=""
                        ></img>
                    </div>
                    <div className={Styles.imageMiddle}>
                        <img
                            src="https://i.ibb.co/HYfwgxD/stick3.jpg"
                            className={Styles.overviewRoomImage3}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <IntroducePageCustom data={data} classNameHr='hs-mx-0' />
                </div>
            </div>
        </div>
    )
}

export default OverviewRoom