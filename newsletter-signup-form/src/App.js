import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import Confirmation from './components/Confirmation';

function App() {
  const[submit, setSubmit] = useState(false);
  const[email, setEmail] = useState("");
  if(submit === false){
    return <Card setSubmit={setSubmit} setEmail={setEmail}/>
  }
  else {
    return <Confirmation setSubmit={setSubmit} email={email}/>
  }
}

export default App;
