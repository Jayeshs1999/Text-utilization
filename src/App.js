import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", 'success');
      document.title = "Text-utils - Dark mode"
    }else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.title = "Text-utils - Light mode"
      showAlert("Light mode has been enabled", 'success')
    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="about" element={ <About/> } />
            <Route exact path="/" element={ <TextForm showAlert = {showAlert} heading="Enter your Address" mode = {mode} /> } />
          </Routes>
      </div>
    </>
    // {/* <div className="container my-3">
    //     <TextForm showAlert = {showAlert} heading="Enter your Address" mode = {mode} />
    //     {/* <About /> */}
    // </div> */}

  );
}

export default App;
