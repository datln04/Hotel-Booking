import classNames from 'classnames'
import React from 'react'
import TextTruncate from '../../../../util/utilities/text-truncate/TextTruncate'
import Styles from './Feedback.module.scss'


const Feedback = (props) => {
    return (
        <div className={classNames('d-flex col-12', Styles.feedbackContainer)}>
            <div className={classNames('col-4', Styles.feedbackImage)}>
                <img alt={props.name} src={props.imageUrl} />
            </div>
            <div className={classNames('col-8 hs-px-24', Styles.feedbackInfo)}>
                <div className='hs-text-white text-lg'>
                    {props.name}
                </div>
                <div className='hs-text-dark-grey text-md'>
                    <TextTruncate text={props.feedback} mobile='3' desktop='3' />
                </div>
            </div>
        </div>
    )
}


export default Feedback
