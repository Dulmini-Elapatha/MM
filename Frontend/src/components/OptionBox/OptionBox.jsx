import React from 'react'
import './OptionBox.css'
import chatbotsvg from '../../img/pngwing 1.svg'

export default function OptionBox(props) {
  return (
    <div className="optionbox">
      <div className="opimage">
      <img src={props.Opimg} alt="" />
      </div> 
      <div className="optiontext">
       <h5>{props.title}</h5>
      </div> 
    </div>
  )
}
