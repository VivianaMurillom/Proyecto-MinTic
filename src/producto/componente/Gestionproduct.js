import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

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
                                        <td>1234</td>
                                        <td>Galletas 2 Tacos Internos</td>
                                        <td>$4.450</td>
                                        <td>Disponible</td>
                                    </tr>
                                    <tr>
                                        <td>1238</td>
                                        <td>Chocolatina Gol 24 Unds</td>
                                        <td>$19.200</td>
                                        <td>No Disponible</td>
                                    </tr>
                                    <tr>
                                        <td >1248</td>
                                        <td >Café 3 En 1</td>
                                        <td>$10.900</td>
                                        <td>Disponible</td>
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
