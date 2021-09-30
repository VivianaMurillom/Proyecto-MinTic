
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import ListVendedor from '../../vendedores/component/ListaVendedores';
import GestVend from './ListaVendedores';



class AgregarVendedor extends React.Component {

    render() {
        const vendedores = [{
            "id": 1,
            "nombreVendedor": "Manuel"
        },
        {
            "id": 2,
            "nombreVendedor": "Cristian"
        }
        ]
        return (


            <div className="GestVend">


                <div>
                    <Header />
                </div>

                
                <header className="text-center">
                <h3>Gestion De Vendedores</h3>
                    <body>
                        <form >
                            <div class="col-sm-4">
                                <label for="" class="form-label">Nombre Comprador</label>
                                <input type="text" class="form-control" ></input>
                            </div> <br></br>

                            <div class="col-sm-4">
                                <label for="inputZip" class="form-label">Cantidad</label>
                                <input type="number" class="form-control" id="">
                                </input>
                            </div>


                            <h1> <prod /></h1>


                            <aside ></aside>
                            <div>

                            </div>
                            <div className="text-left" >
                                <button type="submit" class="btn btn-primary">Guardar</button>

                            </div>

                        </form>




                        <div class="card">
                            <div class="card-header" >
                                <ul class="nav nav-tabs card-header-tabs">

                                    <h3 >Lista De Vendedores</h3>


                                </ul>
                            </div>
                            <div class="card-body">
                                
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Vendedor</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                                {vendedores.map((vendedores) => 
                                (<ListVendedor vendedores={vendedores} />))}
 </tbody>
            </table>
        </div>
                            </div>
                        </div>


                        <footer> &copy; Todos los derechos reservados.</footer>

                    </body>


                </header>
            </div>

        )

    }

}

export default AgregarVendedor;
