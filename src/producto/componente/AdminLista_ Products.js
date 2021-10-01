import { Link } from "react-router-dom";
import React,{useState} from "react";
import UpdateProd from './UpdateProd';
const AdminLista_Products = ({ prod }) => {
    
    const remove=(num)=>{
        if(prod.id==num){
            prod.nombreP="Actualizado"
        }

        
        }
    return (
        <tr>
            <th scope="row">1</th>
            <td>{prod.nombreP}</td>
            <td>{prod.cantidad}</td>
            <td>{prod.precio}</td>
            <td><Link to="/updateVd" ><button type="button" class="btn btn-warning">Editar</button></Link></td>
            <td><button class="btn btn-danger" onClick={remove(1)}>Eliminar</button></td>


        </tr>
    )
}


export default AdminLista_Products