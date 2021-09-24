import logo from './logo.svg';
import './css.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Link } from "react-router-dom";

function GestVend() {
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


                            <h3>Lista de vendedores</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">N°Documento</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Dirección</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Actualizar</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Manuel </td>
                                        <td>Silva </td>
                                        <td>123456780</td>
                                        <td>3100000000</td>
                                        <td>Carrera # </td>
                                        <td>Activo </td>
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

export default GestVend;
