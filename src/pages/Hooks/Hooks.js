import React from 'react'
import Buttn from '../../components/hookscmponent/Buttn'
import { Link } from 'react-router-dom'
const Hooks = () => {
  return (
    <div>
      <h3>Dynamic buttons</h3>
    
      <Link to='../../about'> <Buttn textInsidebutton="About" bgColor="red"></Buttn></Link>
      <Buttn textInsidebutton="Home"></Buttn>
      <Buttn></Buttn>
      <Link to='/'> <Buttn textInsidebutton="Dashboard"></Buttn></Link>
    </div>
  )

}

export default Hooks
