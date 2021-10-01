
import React from "react";
import { Link } from "react-router-dom";
const ListVendedor = ({ usuarios }) => {

    return (
                    <tr>
                        <th scope="row">1</th>
                        <td>{usuarios.rol}</td>
                        <td>{usuarios.nombreVendedor}</td>
                        <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link></button></td>
                        <td><button type="button" id={usuarios.id} class="btn btn-danger"> X </button></td>
                        
                    </tr>
               
    );
}
export default ListVendedor;

