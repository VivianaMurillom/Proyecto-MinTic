import '../../ventas/components/ListaVentas.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

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
                                <div class="col-md-4">
                                    <label for="" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="" value="Manuel "></input>

                                </div>
                                <div class="col-md-4">
                                    <label for="" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" id="" value="Silva" ></input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Tipo de documento</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Cedula</option>
                                        <option>Tarjeta de identidad</option>
                                        <option>cedula extranjera</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="" class="form-label">Numero de documento</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Rol</label>
                                    <select id="inputState" class="form-select">
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