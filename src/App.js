
import './App.css';
import HomePage from './Pages/Home _page/HomePage';
import Navigation from './components/HomePage/Navigation Bar/Navigation_bar';
import OptionTab from './components/HomePage/OptionTab/OptionTab';
import Questionnaire from './components/HomePage/Questionnaire/Questionnaire';
import ResultBox from './components/HomePage/ResultBox/ResultBox';





function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <div className="quesbtn">
      <Questionnaire/>
      </div>
      <div className="Optionbox">
        <OptionTab/>
        <OptionTab/>
        <OptionTab/>
        <ResultBox/>
      </div>
    </div>
  );
}

export default App;
