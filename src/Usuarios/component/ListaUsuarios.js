import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    return (
                usu.map((usuarios)=>(
                    <tr>
                        <th scope="row">{usuarios.id}</th>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.apellido}</td>
                        <td>{usuarios.tipo_identificacion}</td>
                        <td>{usuarios.numero_documento}</td>
                        <td>{usuarios.rol}</td>
                        <td colspan="2" className="col">
                            <button type="button" class="btn btn-warning"><Link to="/UpdateVend">Editar</Link></button>
                            <button type="button"  className="btn btn-danger" onClick={() => EliminarItem(usuarios.id)}> Eliminar </button>
                        </td>
            
                    </tr>
                ))
    );
}
export default ListaUsuarios;