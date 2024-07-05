import './App.css';
import freeCodeCampLogo from './imagenes/WhatsApp Image 2024-06-24 at 7.53.48 PM.jpeg'

function App() {
  return (
    <div className="App" >
    <div className="freecodecamp-logo-contenedor" >
      <img 
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freecodecamp" />

    </div>

    <div className='contenedor-calculadora'>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>

    </div>
    </div>
  );
}

export default App;
