import React from 'react';
import { useState } from 'react';
//Import css:
import './App.css';
//Import componente Login:
import Login from './pages/Login/index';

function App() {
  //Criando estado para mudar o tema:
  const [tema, setTema] = useState("light")
  
  //Função que muda tema:
  const mudarTema = () => {
    setTema((mudar) => (mudar === "light" ? "dark" : "light"))
  }

  return (
    <div className="App" id={tema}>
      <div className='box'>
        <Login />
        <label class="switch">
          <input type="checkbox" onChange={mudarTema}/>
          <span class="slider round">Alterar tema</span>
        </label>
      </div>
    </div>
  );
}

export default App;
