import React from 'react'
import p from './Personal.module.css'
import { NavLink } from 'react-router-dom'

const WorkingDays = (props) => {
  return <span>{props.working_days}</span>
}

const PersonalItem = (props) => {

  let workingDays = props.working_days.map(item => {
    return <WorkingDays working_days={item} />
  })
  return (
    <div className={p.card}>
      <NavLink to={`/personal/${props.href}`} className={p.link}>
        <img src={props.img} className={p.img} alt="USER_AVA" />
        <p className={p.name}>{props.fullName}</p>
        <p className={p.salary}>{props.salary} тг/мес</p>
        <div className={p.wd}>
          {workingDays}
        </div>
      </NavLink>
      <span className={p.times}>&times;</span>
    </div>
  )
}

export default PersonalItem