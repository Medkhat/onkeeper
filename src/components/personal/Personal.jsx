import React from 'react'
import p from './Personal.module.css'
import PersonalItem from './PersonalItem'
import PersonalForm from './PersonalForm'

const Personal = (props) => {
  let personalItem = props.personal.map(item => {
    return <PersonalItem
      fullName={item.fullName}
      href={item.id}
      salary={item.salary}
      working_days={item.working_days}
      img={item.img}
    />
  })
  return (
    <div className={p.content}>
      <div className={p.left_block}>
        {personalItem}
      </div>
      <div className={p.right_block}>
        <PersonalForm dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default Personal;