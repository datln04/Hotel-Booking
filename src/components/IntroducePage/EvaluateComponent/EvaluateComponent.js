import classNames from "classnames"
import Styles from './EvaluateComponent..module.scss'
import backgroundImage from '../../../assets/images/background.jpg';

const EvaluateComponent = () => {

    const data = [
        {
            number: '1500',
            title: 'Khách sử dụng dịch vụ'
        },
        {
            number: '900',
            title: 'Đánh giá 5 sao'
        },
        {
            number: '1220',
            title: 'Khách hài lòng'
        },
        {
            number: 'TOP 10',
            title: 'Khách sạn đáng lưu trú tại thành phố'
        }
    ]

    return (
        <div className={classNames('col-12 d-flex justify-content-center', Styles.evaluateContainer)} style={{ '--backgroundImage': `url(${backgroundImage})` }}>
            <div className="col-12 d-lg-flex justify-content-center align-items-center text-center row hs-px-md-64">
                {data && data.map((item, idx) => {
                    return (
                        // <div className="d-flex">
                        <div className="col-6 col-lg-3 d-block" key={idx}>
                            <div className={classNames('hs-text-dark-brown text-xl', Styles.number)}>{item.number}</div>
                            <div className={classNames('hs-text-white text-md', Styles.title)}>{item.title}</div>
                        </div>
                        // </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EvaluateComponent