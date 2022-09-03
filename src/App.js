import React, { useState , render } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import {BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Login from "./components/Login";




const App = () => {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [modeTitle, setModeTitle] = useState("Dark Mode");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  

  const [oldTitle, setTitle] = useState("My Old Website");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTitle("Welcome To My New Website");
      document.body.style.backgroundColor = "#042743";
      setModeTitle("Light Mode");
      showAlert("Dark mode has been enabled","success");
      document.title = "Dark Mode Enabled";

      // setInterval(() =>{
      //   document.title = "Practice";
      // },2000);
      // setInterval(() =>{
      //   document.title = "Practicing React.js";
      // },1500);
    }
    else {
      setMode("light");
      setTitle("My Old Website");
      setModeTitle("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","info");
      document.title = "Light Mode Enabled";
    }
  };

  return (
    <>
<BrowserRouter>
<Navbar
        title={oldTitle}
        mode={mode}
        toggleMode={toggleMode}
        modeTitle={modeTitle}
      />
       <Alert alert={alert}/>



<Routes>
      <Route path="/"  element={ <TextForm alert={alert} showAlert={showAlert}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login  mode={mode} />} />
      </Routes>
</BrowserRouter>
      
     
    

    </>
  );
};

export default App;
