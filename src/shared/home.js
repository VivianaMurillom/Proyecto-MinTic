import './home.css';
import { Card } from 'react-bootstrap/Card';
import React from "react";
import Header from '../components/Header';
import Lista_Productos from "../producto/componente/lista-productos";
function home() {
  
  return (
    <div >
      
      <html>
        <head>
          <title>Propiedades de Ubicación</title>
        </head>
        <body>
          <header>
         
            <div id="logo"></div>
            <div id="icono1" class="redes"></div>
            <div id="icono2" class="redes"></div>
            <div id="icono3" class="redes"></div>
           
          </header>
          <Header />
          <section>
            <aside id="izq"></aside>
            <article class="article">
              <Lista_Productos></Lista_Productos>
            </article>
            <aside id="der"></aside>
          </section>

          <footer>


          </footer>




        </body>
      </html>
    </div>

  );
}

export default home;
