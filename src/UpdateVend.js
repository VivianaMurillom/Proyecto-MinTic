


import logo from './logo.svg';
import './css.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Link } from "react-router-dom";

function UpdateVend() {
    return (
        <div className="GestVend">
            <header className="GestVend-header">


                <body>


              

                    <header>

                        <div id="logo"></div>
                        <div id="User" class="redes1"><h6>Admin 1</h6></div>
                        <div id="icono3" class="redes" ><image src="./User.png" lass="rounded mx-auto d-block" alt="..." width="42px"></image></div>

                    </header>

                
                    <section>

                        <aside id="izq"></aside>

                        <div class="container">


                            <h3>Actualizar Información</h3>


                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="" value="Manuel "></input>
                                    
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" id="" value="Silva" ></input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Tipo de documento</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>CC</option>
                                        <option>Documento de identidad</option>
                                        <option>Pasaporte</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Numero de documento</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Dirección</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Carrera 5# 123-32">
                                    </input>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                                    </input>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                    </input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Estado</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                    </input>
                               </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck">
                                        </input>
                                        <label class ="form-check-label" for="gridCheck">
                                        Check me out
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </form>



                        </div>

                        <aside id="der"></aside>
                        
                    </section>

                   

                    <footer> &copy; Todos los derechos reservados.</footer>





                </body>
            </header>

        </div>

    );
}
export default UpdateVend;