import React from 'react'
import './ResultBox.css'
import Resultimg from '../../img/results-img.svg';

export default function ResultBox() {
  return (
    <div>
      <dir className="resultBox">
        <div className="resultimg">
          <img src={Resultimg} alt="" />
        </div>
        <div className="resulttext">
            <h5>Your Result</h5>
        </div>
      </dir>
    </div>
  )
}
