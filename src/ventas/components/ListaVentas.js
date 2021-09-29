import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Lista_Productos from '../../producto/componente/lista-productos';

class GestVend extends React.Component {
    
    
    constructor(props) {
        
        super(props)
        this.state = {
            datos:[{
                "id": 1,
                "nombreP": "Pantalones",
                "cantidad": 3,
                "precio": 15000,
                "image":"https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"            
            },
            {                "id": 2,
                "nombreP": "Camisas",
                "cantidad": 2,
                "precio": 10000,
                "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
            }],
            vendedores: [{
            "id": 1,
            "nombreVendedor": "Manuel"},
            {
            "id": 2,
            "nombreVendedor": "Cristian"}
            ],
            ventas:[{"id":1,
            "nombreComprador":"Diego",
            "producto":"Camisas",
            "cantidad":5,
            "nombreVendedor":"Manuel",
            "precio":1000}]
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
       console.log();

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
                                <button type="submit" onClick={this.handleClick} class="btn btn-primary">Guardar</button>
                            </div>

                        </form>

                        <section id="" >

                            <br></br><br></br><br></br>

                            <div class="container">
                                <h3>Gestion De Ventas</h3>
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
                                        {this.state.ventas.map((exercise) => {
                                            return (
                                                <tr>
                                                    <th scope="row">1</th>                                                    
                                                    <td>{exercise.nombreComprador}</td>
                                                    <td>{exercise.producto}</td>
                                                    <td>{exercise.cantidad}</td>
                                                    <td>{exercise.nombreVendedor}</td>
                                                    <td>{exercise.precio}</td>
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
