import React from 'react'
import OptionBox from '../../components/OptionBox/OptionBox';
import ResultBox from '../../components/ResultBox/ResultBox';
import Navbar from '../../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import './homePage.css'
<link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"></link>

export default function Home_page() {
  return (
    <div>
    <Navbar/>
    <div>
      <div>
      <div className="homeText">
        <h1 className="Htext">Empowering Minds,<br/> Connecting Hearts<br/>
         Your Path to Mental Wellness. 
        </h1>
      </div>
      <div className="homeimg01"></div>
      </div>
      <div className="qusbtn">
      <Button variant="outline-dark">Questionnaire</Button>
      </div>
      <div className="boxFlex">
        <OptionBox title="Chatbot" />
        <OptionBox title="Doctor"/>
        <OptionBox title="Find a Friend"/>
        <ResultBox/>
      </div>
    </div>
    </div>
  )
}
