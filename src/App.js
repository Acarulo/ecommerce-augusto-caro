import './App.css';
import Navbar from './components/Navbar';

function App() {

  /*
  let name = "Augusto"
  let edad = 29
  let trabajos = {
    maniana: "alumno",
    tarde: "analista",
    noche: "vago"
  }
  */

  return (
    <div className="app">
      <Navbar />
      
      {/* 
      <p>{name}</p>
      <p>Caro</p>
      <p>Edad: {edad}</p>
      <p>Trabajos:</p>
      <p>{trabajos.tarde}</p>
      <input placeholder='Ingrese lo que quiera'></input>
      */}
    </div>
  );
}

export default App;
