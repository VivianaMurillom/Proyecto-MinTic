import React, { useState } from "react";
import { Link } from "react-router-dom";


const AdminLista_Products = ({ prod }) => {
    const  [ value , setValue ]  = useState ( 1 ) ;

    const EliminarItem = idSeleccionado => {
        const newList = prod.filter((item) => item.id !== idSeleccionado)
        prod.splice(0, prod.length);
        newList.map((newPro)=>{
            prod.push({
                id: newPro.id,
                nombreP: newPro.nombreP,
                cantidad: newPro.cantidad,
                precio: newPro.precio,
            })
        })
        setValue ( ( value +  1 ) )
        console.log("ELIMINADO", idSeleccionado,newList)
    }
    return (
        prod.map((proda) => {
            return (
                <tr>
                    <th scope="row">#</th>
                    <td>{proda.nombreP}</td>
                    <td>{proda.cantidad}</td>
                    <td>{proda.precio}</td>
                    <td><Link to="/updateVd" id={proda.id}><button type="button" class="btn btn-warning">Editar</button></Link></td>
                    <td><button class="btn btn-danger" onClick={() => EliminarItem(proda.id)}>Eliminar</button></td>
                </tr>)
        })
    )
}
export default AdminLista_Products
