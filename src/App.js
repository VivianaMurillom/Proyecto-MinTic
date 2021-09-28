import './App.css';
import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>

        <p>
          Edit <code></code> .
        </p>

        <Link to="/pag" >Gestion de vendedores</Link>
        <p>
        <Link to="/Listaproduct" >Gestion de productos</Link>
        </p>

      </div>
    </div>
  );
}

export default App;
