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


