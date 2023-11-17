import { ColorLens } from '@mui/icons-material'
import React from 'react'

const Buttn = (props) => {
    // const {textInsidebutton} = props
    const textInsidebutton= props.textInsidebutton
  return (
    <div>
        <button style={{backgroundColor: `${props.bgColor}`}}>{textInsidebutton}</button>
        </div>
  )
  
}
Buttn.defaultProps={
    bgColor: 'yellow',
    textInsidebutton: 'Click'
  }
export default Buttn
