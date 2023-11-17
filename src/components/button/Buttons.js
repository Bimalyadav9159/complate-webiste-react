import React from 'react'
import './buttons.scss'
const Buttons = (props) => {
  const {children} = props
  return (
    <div>
      <button className='ntn'>{children}</button>
    </div>
  )
}

export default Buttons
