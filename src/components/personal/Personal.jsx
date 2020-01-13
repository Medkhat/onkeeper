import React from 'react'
import p from './Personal.module.css'
import PersonalItem from './PersonalItem'
import PersonalFormContainer from './PersonalFormContainer'

const Personal = (props) => {
  let personalItem = props.personal.map(item => {
    return <PersonalItem
      fullName={item.fullName}
      href={item.id}
      key={item.id}
      salary={item.salary}
      working_days={item.working_days}
      img={item.img}
      getEmployeeData={props.getEmployeeData}
    />
  })
  return (
    <div className={p.content}>
      <div className={p.left_block}>
        {personalItem}
      </div>
      <div className={p.right_block}>
        <PersonalFormContainer store={props.store} />
      </div>
    </div>
  )
}

export default Personal;