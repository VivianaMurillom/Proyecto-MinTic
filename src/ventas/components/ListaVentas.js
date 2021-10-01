import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
const listaVentas = ({ ventas }) => {
  
    return (
        <tr>
        <th scope="row">#</th>
        <td>{ventas.nombreComprador}</td>
        <td>{ventas.producto}</td>
        <td>{ventas.cantidad}</td>
        <td>{ventas.nombreVendedor}</td>
        <td>{ventas.total}</td>

        <td><Link to="/updateVentas" ><button type="button" class="btn btn-warning" >Editar</button></Link></td>
        <td><button type="button" key={ventas.id} class="btn btn-danger"> X </button></td>
        </tr>
    );
}
export default listaVentas;

