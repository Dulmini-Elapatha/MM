import React from 'react'
import './ResultBox.css'
import Resultimg from '../../img/results-img.svg';
import Resultimg02 from '../../img/pngwing7.svg';

export default function ResultBox() {
  return (
    <div>
      <dir className="resultBox">
        <div className="resultFlex">
        <div className="resultimg">
          <img src={Resultimg} alt="" />
        </div>
        <div className="resulttext">
            <h5>Your Result</h5>
        </div>
        </div>
         <div className="img02"><img src={Resultimg02} alt="" /> </div>
      </dir>
    </div>
  )
}
