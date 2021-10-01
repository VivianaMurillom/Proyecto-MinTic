import './ListaVentas.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ListaVentas = ({ ventas }) => {
    const  [ value , setValue ]  = useState (1);

    const EliminarItem = idSeleccionado => {
        const newList = ventas.filter((item) => item.id !== idSeleccionado)
        ventas.splice(0, ventas.length);
        newList.map((newVenta)=>{
            ventas.push({
                id: newVenta.id,
                nombreP: newVenta.producto,
                cantidad: newVenta.cantidad,
                vendedor: newVenta.nombreVendedor,
                total:newVenta.total
            })
        })
        setValue( ( value +  1 ) )
        console.log("ELIMINADO", idSeleccionado,newList)
    }
    
    return (
        ventas.map((venta) => {
        return (
            <tr>
            <th scope="row">#</th>
            <td>{venta.nombreComprador}</td>
            <td>{venta.producto}</td>
            <td>{venta.cantidad}</td>
            <td>{venta.nombreVendedor}</td>
            <td>{venta.total}</td>

            <td><Link to="/updateVentas" ><button type="button" class="btn btn-warning" >Editar</button></Link></td>
            <td><button type="button"  class="btn btn-danger" onClick={() => EliminarItem(venta.id)}> X </button></td>
            </tr>
        )})
    )




    
}
export default ListaVentas;

