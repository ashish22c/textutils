import "./App.css";
import React, {useState} from 'react'
import Navbar from "./my components/Navbar";
import Alert from "./my components/Alert";
import TextForm from "./my components/TextForm";
import About from "./my components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const [alert,setAlert] = useState(null);
  const removeTgl=()=>{
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
  }
  const tglMode = (cls) =>{
    removeTgl();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  const [mode,setMode] = useState('light');
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" toggleMode={tglMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text above to analyze below" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;