import React from 'react'
import './OptionBox.css'

export default function OptionBox(props) {
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
