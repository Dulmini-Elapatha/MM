import React from 'react'
import './OptionTab.css'

export default function OptionTab(props) {
  return (
    <div className="optionbox">
      <div className="opimage">
      <div className="optiontext">
       <h5>{props.title}</h5>
      </div>
      </div>  
    </div>
  )
}
