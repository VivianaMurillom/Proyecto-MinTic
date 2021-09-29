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
                <header className="GestVend-header">
                    <body>
                        <form class="">
                            <div class="col-sm-4">
                                <label for="" class="form-label">Nombre Comprador</label>
                                <input type="text" class="form-control" ></input>
                            </div> <br></br>


                            <div class="col-sm-4">
                                <label for="inputState" class="form-label">Producto</label>
                                <select id="inputState" class="form-select">
                                    {/* <Lista_Productos></Lista_Productos> */}
                                    {this.state.datos.map((prod) => {
                                        return (
                                            <option>{prod.nombreP}</option>
                                        )
                                    })}
                                </select>
                            </div> <br></br>
                            <div class="col-sm-4">
                                <label for="inputZip" class="form-label">Cantidad</label>
                                <input type="number" class="form-control" id="">
                                </input>
                            </div>
                            <div class="col-sm-4">
                                <label for="inputState" class="form-label">Vendedor</label>
                                <select id="inputState" class="form-select">

                                    {this.state.vendedores.map((vendedor) => {
                                        return (
                                            <option>{vendedor.nombreVendedor}</option>
                                        )
                                    })}
                                </select>
                            </div>


                            <aside ></aside>
                            <div>

                            </div>
                            <div class="col-12">
                                <button type="submit" onClick={handleClick} class="btn btn-primary">Guardar</button>

                            </div>

                        </form>

                        <section>
                            {ventass.map((ventas) => (<GestVend ventas={ventas} />))}
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
function handleClick() {
console.log("HELLLLLOOOOOOOOOOOOOOOO")
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
