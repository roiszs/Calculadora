import './App.css';
import freeCodeCampLogo from './imagenes/WhatsApp Image 2024-06-24 at 7.53.48 PM.jpeg'
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react';

function App() {


  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };


  return (
    <div className="App" >
    <div className="freecodecamp-logo-contenedor" >
      <img 
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freecodecamp" />

    </div>

    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'> 
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton></div>
      <div className='fila'> 
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>*</Boton></div>
      <div className='fila'> 
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton></div>
      <div className='fila'></div>
      <BotonClear> Clear </BotonClear>

    </div>
    </div>
  );
}

export default App;
