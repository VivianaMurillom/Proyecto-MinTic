import './css.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Link } from "react-router-dom";

class GestVend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datos:
                [
                    {
                        "id": 1,
                        "nombre": " Manuel",
                        "apellido": "Silva",
                        "nDocumento": 1234567890,
                        "telefono": 3210000000,
                        "direccion": "carrera  #",
                        "estado": "activo"
                    },
                    {
                        "id": 2,
                        "nombre": " Manuel",
                        "apellido": "Silva",
                        "nDocumento": 1234567890,
                        "telefono": 3210000000,
                        "direccion": "carrera  #",
                        "estado": "activo"

                    },
                    {
                        "id": 3,
                        "nombre": " Manuel",
                        "apellido": "Silva",
                        "nDocumento": 1234567890,
                        "telefono": 3210000000,
                        "direccion": "carrera  #",
                        "estado": "activo"

                    }]
        }
    }


    render() {
return (
        <div className="GestVend">
            <header className="GestVend-header">
                <body>
                    <header>

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


                                    
                                    {this.state.datos.map((exercise) => {
                                        return (
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>{exercise.nombre}</td>
                                                <td>{exercise.nDocumento}</td>
                                                <td>{exercise.telefono}</td>
                                                <td>{exercise.direccion}</td>
                                                <td>{exercise.estado}</td>
                                                <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link><a href="./FormH7.html"> </a></button></td>
                                                <td><button type="button" class="btn btn-danger"> X </button></td>
                                            </tr>
                                        )
                                    })}



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

    )

    }
}
export default GestVend;
