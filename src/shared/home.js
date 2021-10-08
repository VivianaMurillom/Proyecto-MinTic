import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Header from '../components/Header';
import Lista_Productos from "../producto/componente/lista-productos";
import Footer from '../components/footer';

function home() {
  
  return (
    <div className="container-fluid">
      <div className="row">
          <Header />
      </div>

      <div className="row justify-content-center">
        <div className="p-3 col col-sm-7">
          <Lista_Productos/>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default home;
