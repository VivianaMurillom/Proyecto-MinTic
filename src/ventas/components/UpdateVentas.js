import './ListaVentas.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

const ventas = [{
    "id": 1,
    "nombreComprador": "Cristian",
    "producto": "Camisas",
    "cantidad": 5,
    "nombreVendedor": "Cristian",
    "precio": 15000
}, {
    "id": 2,
    "nombreComprador": "Cristian",
    "producto": "Camiseta",
    "cantidad": 5,
    "nombreVendedor": "Manuel",
    "precio": 15000
}]
function UpdateVentas() {
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
                                    <label for="" class="form-label">Comprador</label>
                                    <input type="text" class="form-control" id="" value="Manuel "></input>

                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Producto</label>
                                    <select id="inputState" class="form-select">
                                        {ventas.map((pro) => {
                                            return (
                                                <option>{ventas.nombreVendedor}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Cantidad</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col-6">
                                    <label for="inputAddress" class="form-label">Vendedor</label>
                                    <select id="inputState" class="form-select">
                                        {ventas.map((pro) => {
                                            return (
                                                <option>{ventas.producto}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div class="col-6">
                                    <label for="inputAddress2" class="form-label">Total</label>
                                    <input type="text" class="form-control" id="" placeholder="">
                                    </input>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Edit</button>
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
export default UpdateVentas;