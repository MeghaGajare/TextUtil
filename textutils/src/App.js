// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import TextForms from './components/TextForms';

function App() {
  return (
    <div>
       <NavBar navName="CloudySky" aboutHome = "knowMe"/>
        <TextForms heading = "Enter the text to analyze"/>
    </div>
  );
}

export default App;
