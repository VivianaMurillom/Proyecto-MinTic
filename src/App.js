import logo from './logo.svg';
import './App.css';
import GestVend from './ListaVentas.js';
import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>

        <p>
          Edit <code>src/App.js</code> .
        </p>

        <Link to="/pag" >Gestion de vendedores</Link> 
        

      </div>



    </div>
  );
}

export default App;
