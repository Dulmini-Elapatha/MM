import React from 'react'
import OptionBox from '../../components/OptionBox/OptionBox';
import ResultBox from '../../components/ResultBox/ResultBox';
import Navbar from '../../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import img01 from '../../img/homeimgfinal.svg';
import './homePage.css'
<link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"></link>

export default function Home_page() {
  return (
    <div>
    <Navbar/>
    <div>
    <div className="textImgFlex">
    <div>
      <div className="homeText">
        <h1 className="Htext">Empowering Minds,<br/> Connecting Hearts<br/>
         Your Path to Mental Wellness. 
        </h1>
      </div>
      <div className="qusbtn">
        <Button variant="outline-dark">Questionnaire</Button>
      </div>
    </div>
      <div className="homeimg01">
        <img src={img01} 
        alt="home image 01" />
      </div>
    </div>
      <div className="boxFlex">
        <OptionBox title="Chatbot" />
        <OptionBox title="Doctor"/>
        <OptionBox title="Find a Friend"/>
        <div className="ResultBox"><ResultBox/></div>
      </div>
    </div>
    </div>
  )
}
