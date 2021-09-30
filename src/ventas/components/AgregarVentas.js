import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Lista_Productos from '../../producto/componente/lista-productos';
import GestVend from './ListaVentas';


const ventass = [{
    "id": 2,
    "nombreComprador": "Cristian",
    "producto": "Camisas",
    "cantidad": 5,
    "nombreVendedor": "Cristian",
    "precio": 15000
}, {
    "id": 2,
    "nombreComprador": "Cristian",
    "producto": "Camisas",
    "cantidad": 5,
    "nombreVendedor": "Cristian",
    "precio": 15000
}]

class AgregarVenta extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            datos: [{
                "id": 1,
                "nombreP": "Pantalones",
                "cantidad": 3,
                "precio": 15000,
                "image": "https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"
            },
            {
                "id": 2,
                "nombreP": "Camisas",
                "cantidad": 2,
                "precio": 10000,
                "image": "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
            }],
            vendedores: [{
                "id": 1,
                "nombreVendedor": "Manuel"
            },
            {
                "id": 2,
                "nombreVendedor": "Cristian"
            }
            ]
        }
    }

    render() {
        return (
            <div className="GestVend">
                <div>
                    <Header />
                </div>
                <header className="text-center" >
                    <body>
                        <h3>Registrar Venta</h3>
                        <form class="card text-center mb-2" >
                            <div class="row m-2">
                                <div class="col">
                                    <label for="inputZip" class="form-label">Nombre de cliente</label>
                                    <input type="text" class="form-control" id=""></input>
                                </div>
                                <div class="col">
                                    <label for="inputZip" class="form-label">Numero de documento</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col">
                                    <label for="inputState" class="form-label">Producto</label>
                                    <select id="inputState" class="form-select">
                                        {this.state.datos.map((prod) => {
                                            return (
                                                <option>{prod.nombreP}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="row m-2">
                                <div class="col">

                                    <label for="inputZip" class="form-label">Cantidad</label>
                                    <input type="number" class="form-control" id=""></input>

                                </div>
                                <div class="col">
                                    <label for="inputZip" class="form-label">Cantidad</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col">
                                    <label for="inputState" class="form-label">Vendedor</label>
                                    <select id="inputState" class="form-select">

                                        {this.state.vendedores.map((vendedor) => {
                                            return (
                                                <option>{vendedor.nombreVendedor}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                            </div>

                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs">

                                    <button type="submit" onClick={() => {
                                    alert.show('Oh look, an alert!')
                                }} class="btn btn-primary mb-2">Guardar</button>


                                </ul>
                            </div>


                        </form>

                        <section>
                            <div class="card">
                                <div class="card-header" >
                                    <ul class="nav nav-tabs card-header-tabs">

                                        <h3 >Lista De Ventas</h3>


                                    </ul>
                                </div>
                                <div class="card-body">

                                    <div class="container">

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Comprador</th>
                                                    <th scope="col">Nombre Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Vendedor</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Actualizar</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {ventass.map((ventas) => (<GestVend ventas={ventas} />))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </section>


                        <script src="./gestor.js"></script>
                        <footer> &copy; Todos los derechos reservados.</footer>

                    </body>


                </header>
            </div>

        )

    }

}
function handleClick() {
    console.log("DEBE GUARDAR")
    const newelement = {
        "id": 2,
        "nombreComprador": "asdasds",
        "producto": "Cristian",
        "cantidad": 5,
        "nombreVendedor": "Cristian",
        "precio": 15000
    }
};

export default AgregarVenta;
