import './App.css';
import React from "react";
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header />
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
          <section>
            <aside id="izq"></aside>
            <article></article>
            <aside id="der"></aside>
          </section>
          <footer></footer>
        </body>
      </html>
    </div>
  );
}

export default App;
