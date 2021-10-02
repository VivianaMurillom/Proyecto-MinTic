
import React from "react";
import { Link } from "react-router-dom";
const ListVendedor = ({ usuarios }) => {

    return (
                    <tr>
                        <th scope="row">1</th>
                        <td>{usuarios.nombre}</td>
                        <td>{usuarios.apellido}</td>
                        <td>{usuarios.tipo_identificacion}</td>
                        <td>{usuarios.numero_documento}</td>
                        <td>{usuarios.rol}</td>
                        <td><button type="button" class="btn btn-warning"><Link to="/UpdateVend">Editar</Link></button></td>
                        <td><button type="button" id={usuarios.id} class="btn btn-danger"> X </button></td>
                        
                    </tr>
               
    );
}
export default ListVendedor;

