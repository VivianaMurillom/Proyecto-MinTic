
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateVend from "./UpdateVend";
const ListaUsuarios = ({ usu }) => {
    const  [ value , setValue ]  = useState (1);
    const EliminarItem = idSeleccionado => {
        const newList = usu.filter((item) => item.id !== idSeleccionado)
        usu.splice(0, usu.length);
        newList.map((newUsu)=>{
            usu.push({
                id: newUsu.id,
                nombre: newUsu.nombre,
                apellido: newUsu.apellido,
                tipo_identificacion: newUsu.tipo_identificacion,
                numero_documento: newUsu.numero_documento,
                rol:newUsu.rol,
            })
        })
        setValue( ( value +  1 ) )
        console.log("ELIMINADO", idSeleccionado,newList)
    }
    const UpdateItem=(idSeleccionado)=>{
        const lista = usu.filter((item) => item.id == idSeleccionado);   
         <UpdateVend  info = {lista} />  
        setValue( ( value +  1 ) )
    }
    return (
                usu.map((usuarios)=>(
                    <tr>
                        <th scope="row">1</th>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.apellido}</td>
                        <td>{usuarios.tipo_identificacion}</td>
                        <td>{usuarios.numero_documento}</td>
                        <td>{usuarios.rol}</td>
                        <td><Link to="/UpdateVend" ><button className="btn btn-warning" onClick={()=>UpdateItem(usuarios.id)}>Editar</button></Link></td>
                        <td><button type="button"  className="btn btn-danger" onClick={() => EliminarItem(usuarios.id)}> X </button></td>  
            
                    </tr>
                ))
    );
}
export default ListaUsuarios;

