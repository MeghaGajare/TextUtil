// import logo from './logo.svg';
import './App.css';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import TextForms from './components/TextForms';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
   
      <BrowserRouter>
      <NavBar navName="CloudySky"  />
        <Routes>
        <Route path="/" element={<TextForms heading="Enter the text to analyze" />}/>
        <Route path="/About" element={<About />}/>
        
          {/* <Route path="/Text/*" element={<TextForms heading="Enter the text to analyze" />} /> */}
          {/* <Route path="/" element={<TextForms heading="Enter the text to analyze" />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
