import './css.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Link } from "react-router-dom";

function Gestproduction() {
    
    return (
        <div className="Gestproduction">
            <header className="Gestproduct-header">
                <body>
                    <header>

                        <div id="User" class="redes1"><h6>Admin 1</h6></div>
                        <div id="icono3" class="redes" ><image src="./User.png" lass="rounded mx-auto d-block" alt="..." width="42px"></image></div>

                    </header>

                    <section>

                        <aside id="izq"></aside>

                        <div class="container">

                            <h3>Lista de productos</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"># ID Producto</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Valor Unitario</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1234</td>
                                        <td>Galletas 2 Tacos Internos</td>
                                        <td>$4.450</td>
                                        <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link><a href="./FormH7.html"> </a></button></td>
                                        <td><button type="button" class="btn btn-danger"> X </button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Diego</td>
                                        <td>Diaz</td>
                                        <td>1234567890</td>
                                        <td>3100000001</td>
                                        <td>Carrera # </td>
                                        <td>Activo </td>
                                        <td><button type="button" class="btn btn-warning">Editar </button></td>
                                        <td><button type="button" class="btn btn-danger"> X </button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td >Larry</td>
                                        <td >the Bird</td>
                                        <td>1234567890</td>
                                        <td>3100000001</td>
                                        <td>Carrera # </td>
                                        <td>Activo </td>
                                        <td><button type="button" class="btn btn-warning">Editar </button></td>
                                        <td><button type="button" class="btn btn-danger"> X </button></td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <aside id="der"></aside>
                        <span id="to"></span>
                    </section>


                    <script src="./gestor.js"></script>
                    <footer> &copy; Todos los derechos reservados.</footer>

                </body>


            </header>
        </div>
    );
}

export default Gestproduction;
