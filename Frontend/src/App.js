import HomePage from './Pages/Home_page/HomePage';
import Chatbot from './Pages/Chatbot/Chatbot';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/chatbot" element={<Chatbot/>} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
