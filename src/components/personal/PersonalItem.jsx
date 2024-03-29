import React from 'react'
import p from './Personal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const WorkingDays = (props) => {
  return <span>{props.working_days}</span>
}

const PersonalItem = (props) => {
  let workingDays = props.working_days.map(item => {
    return <WorkingDays working_days={item} key={item} />
  })

  let onClickPersonalItem = () => {
    let userId = props.userId
    props.getEmployeeData(userId)
  }

  return (
    <div className={p.card}>
      <div className={p.link} onClick={onClickPersonalItem}>
        <img src={props.img} className={p.img} alt="USER_AVA" />
        <p className={p.name}>{props.fullName}</p>
        <p className={p.salary}>{props.salary} тг/мес</p>
        <div className={p.wd}>
          {workingDays}
        </div>
      </div>
      <span className={p.times}>
        <FontAwesomeIcon
          icon={faTimesCircle}
        />
      </span>
    </div>
  )
}

export default PersonalItem
