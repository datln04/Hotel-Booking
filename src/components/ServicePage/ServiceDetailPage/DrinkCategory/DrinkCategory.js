import classNames from 'classnames'
import React from 'react'
import DrinkItem from '../DrinkItem/DrinkItem'
import Styles from "../DrinkCategory/DrinkCategory.module.scss"
export default function DrinkCategory({data}) {
  return (
    <div className={classNames("col-12 hs-bg-dark d-flex justify-content-center align-items-center hs-pt-32", Styles.DrinkCategory)}>
    <div className={classNames("col-10 row")}>
      <DrinkItem dataDrink={data}/>
    </div>
  </div>
  )
}
