<<<<<<< HEAD
<<<<<<< HEAD:src/components/UpdateVend.js
<<<<<<< HEAD
import './css.css';
=======
import '../ventas/components/ListaVentas.css'
=======
import '../../ventas/components/ListaVentas.css'
>>>>>>> 00dbf6ece89f5401f5550d5ef2c8a9f7aadf862f:src/Usuarios/component/UpdateVend.js
import 'bootstrap/dist/css/bootstrap.css';
>>>>>>> 59a5067fb574784e33c8c373c678ee2264e64113
import React from "react";

function UpdateVend() {
=======
import React, { useState,useEffect } from "react";
import Header from "../../components/Header";

const usuarios = [{
    "id": 1,
    "nombre": "Manuel",
    "apellido":"Diaz",
    "tipo_identificacion":"Cedula",
    "numero_documento":"123512",
    "rol":"Vendendor"
},
{
    "id": 2,
    "nombre": "Juan",
    "apellido":"Perez",
    "tipo_identificacion":"Cedula",
    "numero_documento":"6345323",
    "rol":"administrador"
}
]
const UpdateVend=({info})=> {
>>>>>>> cae8590b166428c6aaf0392fd78de645c74e28ea
    return (
        <div className="GestVend">
            <header className="GestVend-header">
                <body>
                    <Header/>
                    <section>

                        <aside id="izq"></aside>

                        <div class="container">


                            <h3>Actualizar Información</h3>


                            <form class="row g-3">
                                <div class="col-md-4">
                                    <label for="" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" value={usuarios[0].nombre} ></input>

                                </div>
                                <div class="col-md-4">
                                    <label for="" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" value={usuarios[0].apellido} ></input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Tipo de documento</label>
                                    <select id="inputState" class="form-select" >
                                        <option >Cedula</option>
                                        <option>Tarjeta de identidad</option>
                                        <option>cedula extranjera</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="" class="form-label">Numero de documento</label>
                                    <input type="number" class="form-control"value={usuarios[0].numero_documento}></input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Rol</label>
                                    <select id="inputState" class="form-select" >
                                        <option selected>Administrador</option>
                                        <option>Vendedor</option>
                                        <option></option>
                                    </select>
                                </div>
                                
                               
                                <div class="col-m4">
                                    <button type="submit" class="btn btn-primary">Actualizar</button>
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


