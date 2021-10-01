import React, { useState } from "react";
import { Link } from "react-router-dom";
const ListaVentas = ({ venta }) => {
    const  [ value , setValue ]  = useState ( 0 ) ;
    const EliminarItem = idSeleccionado => {
        const newList = venta.filter((item) => item.id !== idSeleccionado)
        venta.splice(0, venta.length);
        newList.map((newPro) => {
            venta.push({
                nombreComprador: newPro.nombreComprador,
                ndocument: newPro.ndocument,
                producto: newPro.producto,
                cantidad: newPro.cantidad,
                total: newPro.total,
                nombreVendedor: newPro.nombreVendedor
                
            })
        })
        setValue((value + 1))
        console.log("ELIMINADO", idSeleccionado, newList)
    }
    return (
        venta.map((ventas) => {
            return (
                <tr>
                    <th scope="row">#</th>
                    <td>{ventas.nombreComprador}</td>
                    <td>{ventas.producto}</td>
                    <td>{ventas.cantidad}</td>
                    <td>{ventas.nombreVendedor}</td>
                    <td>{ventas.total}</td>
                    <td><Link to="/updateVentas" ><button type="button" class="btn btn-warning" >Editar</button></Link></td>
                    <td><button class="btn btn-danger" onClick={() => EliminarItem(ventas.id)}>Eliminar</button></td>
                </tr>)
        }
        ));
}
export default ListaVentas;

