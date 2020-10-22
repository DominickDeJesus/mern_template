import React, { useEffect, useState } from 'react';
import logo from './resources/images/logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [serverMessage, setServerMessage] = useState();

  useEffect(() => {
    axios
      .get('/api/test')
      .then((response) => setServerMessage(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h3>Hello from client!</h3>
      <h3>{serverMessage}</h3>
    </div>
  );
}

export default App;
