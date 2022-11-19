import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "../NotFoundPage/NotFoundPage.module.scss"
export default function NotFoundPage() {
  return (
    <div className={classNames('col-12 hs-bg-white-6 d-flex justify-content-center align-items-center',Styles.NotFoundPage)}>
        <div className='d-block text-center'>
        <div className={classNames('text-xl',Styles.Error)}>
            <p>404</p>
        </div>
        <div className={classNames('text-lg')}>
            <p>Xin lỗi ! Trang này không tìm thấy</p>
        </div>
        </div>
        {/* <Link to="/home"/> */}
    </div>
  )
}
