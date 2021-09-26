import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
import Header from './Header';

class GestVend extends React.Component {
    constructor(props) {

        super(props)
        
        this.state = {
            datos:
                [{
                    "id": 1,
                    "nombreP": "Pantalones",
                    "cantidad": 3,
                    "precio": 15000
                },
                {
                    "id": 2,
                    "nombreP": "Camisas",
                    "cantidad": 2,
                    "precio": 10000
                }],
            vendedores: [{
                "id": 3,
                "nombre": " Manuel",
                "apellido": "Silva",
                "nDocumento": 1234567890,
                "telefono": 3210000000,
                "direccion": "carrera  #",
                "estado": "activo"
            }, {
                "id": 3,
                "nombre": " Diego",
                "apellido": "Silva",
                "nDocumento": 1234567890,
                "telefono": 3210000000,
                "direccion": "carrera  #",
                "estado": "activo"
            }, {
                "id": 3,
                "nombre": " Pepito",
                "apellido": "Silva",
                "nDocumento": 1234567812,
                "telefono": 3210000032,
                "direccion": "carrera  #",
                "estado": "activo"
            }]
        }


    }
    handleClick = () => {
        this.setState({ myArray: this.state.datos.push({
        "id": 3,
        "nombreP": "Camisaass",
        "cantidad": 23,
        "precio": 10000
    })})
    };


    render() {
        return (

            <div className="GestVend">
                <div>
                    <Header />
                </div>
                <header className="GestVend-header">
                    <body>
                        <header class="head">
                            <div id="logo"></div>
                            <div id="User" class="redes1"><h6>Admin 1</h6></div>
                            <div id="icono3" class="redes" ><image src="./User.png" lass="rounded mx-auto d-block" alt="..." width="42px"></image></div>

                        </header>


                        <form class="row g-3">
                            {/* <div class="col-md">
                                <label for="" class="form-label">Nombre Comprador</label>
                                <input type="text" class="form-control" ></input>
                            </div> <br></br>

                            <div class="col-md">
                                <label for="inputState" class="form-label">Producto</label>
                                <select id="inputState" class="form-select">
                                    {this.state.datos.map((productos) => {
                                        return (
                                            <option>{productos.nombreP}</option>
                                        )
                                    })}
                                </select>
                            </div> <br></br>
                            <div class="col-md">
                                <label for="inputZip" class="form-label">Cantidad</label>
                                <input type="number" class="form-control" id="">
                                </input>
                            </div>
                            <div class="col-md">
                                <label for="inputState" class="form-label">Vendedor</label>
                                <select id="inputState" class="form-select">

                                    {this.state.vendedores.map((vendedor) => {
                                        return (
                                            <option>{vendedor.nombre}</option>
                                        )
                                    })}
                                </select>
                            </div>


                            <aside ></aside>
                            <div>

                            </div> */}
                            <div class="col-12">
                                <button type="submit" onClick={this.handleClick} class="btn btn-primary">Guardar</button>
                            </div>

                        </form>

                        <section id="" >

                            <br></br>

                            <div class="container">
                                <h3>Gestion De Ventas</h3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Vendedor</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Actualizar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.datos.map((exercise) => {
                                            return (
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>{exercise.nombreP}</td>
                                                    <td>{exercise.cantidad}</td>
                                                    <td>Vendedor</td>
                                                    <td>{exercise.precio * exercise.cantidad}</td>
                                                    <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link><a href="./FormH7.html"> </a></button></td>
                                                    <td><button type="button" class="btn btn-danger"> X </button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <aside ></aside>
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
