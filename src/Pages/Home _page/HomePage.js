import React from 'react'
import Navigation from '../../components/HomePage/Navigation_Bar/Navigation_bar';
import Questionnaire from '../../components/HomePage/Questionnaire/Questionnaire';
import OptionTab from '../../components/HomePage/OptionTab/OptionTab';
import ResultBox from '../../components/HomePage/ResultBox/ResultBox';
import './homePage.css'
<link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"></link>

export default function Home_page() {
  return (
    <div>
      <Navigation/>
      <div className="homeText">
        <h1>Empowering Minds,<br/> Connecting Hearts<br/>
         Your Path to Mental Wellness. 
        </h1>
      <div className="homeimg01"></div>
      <div className="quesbtn">
        <Questionnaire/>
      </div>
      <div className="Optionbox">
        <OptionTab title="Chatbot" />
        <OptionTab title="Doctor"/>
        <OptionTab title="Find a Friend"/>
        <ResultBox/>
      </div>
      </div>
    </div>
  )
}
