import './ListaVentas.css';
import React from "react";
import { Link } from "react-router-dom";
const listaVentas = ({ ventas }) => {
  
    return (
        <tr>
        <th scope="row">{ventas.id}</th>
        <td>{ventas.nCliente}</td>
        <td>{ventas.producto}</td>
        <td>{ventas.cantidad}</td>
        <td>{ventas.vendedor}</td>
        <td>{ventas.total}</td>

        <td><Link to="/updateVentas" ><button type="button" class="btn btn-warning" >Editar</button></Link></td>
        <td><button type="button" id={ventas.id} class="btn btn-danger"> X </button></td>
        </tr>
    );
}
export default listaVentas;

