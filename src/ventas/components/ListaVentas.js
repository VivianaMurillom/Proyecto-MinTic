
import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
const GestVend=({ventas})=>{
  
    return(
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
               
                        <tr>
                            <th scope="row">1</th>
                            <td>{ventas.nombreComprador}</td>
                            <td>{ventas.producto}</td>
                            <td>{ventas.cantidad}</td>
                            <td>{ventas.nombreVendedor}</td>
                            <td>{ventas.precio}</td>
                            <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link><a href="./FormH7.html"> </a></button></td>
                            <td><button type="button" id={ventas.id} class="btn btn-danger"> X </button></td>
                            </tr>
            </tbody>
        </table>
    </div>
    );
}
export default GestVend;

