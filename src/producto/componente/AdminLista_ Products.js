import { Link } from "react-router-dom";
import React,{useState} from "react";
import UpdateProd from './UpdateProd';
const AdminLista_Products = ({ prod }) => {
    
    const  [ value , setValue ]  = useState (1);
    const EliminarItem = idSeleccionado => {
        const newList = prod.filter((item) => item.id !== idSeleccionado)
        prod.splice(0, prod.length);
        newList.map((newProd)=>{
            prod.push({
                id: newProd.id,
                nombreP: newProd.nombreP,
                cantidad: newProd.cantidad,
                precio: newProd.precio
            })
        })
        setValue( ( value +  1 ) )
        console.log("ELIMINADO", idSeleccionado,newList)
    }
    return (
        prod.map((prode)=>(
        <tr>
            <th scope="row">1</th>
            <td>{prode.nombreP}</td>
            <td>{prode.cantidad}</td>
            <td>{prode.precio}</td>
            <td><Link to="/updateProd" ><button type="button" class="btn btn-warning">Editar</button></Link></td>
            <td><button class="btn btn-danger" onClick={() => EliminarItem(prode.id)}>Eliminar</button></td>
        </tr>
    ))
    )
}


export default AdminLista_Products