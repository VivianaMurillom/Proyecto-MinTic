
import React from "react";
import { Link } from "react-router-dom";
const ListVendedor = ({ vendedores }) => {

    return (
                    <tr>
                        <th scope="row">1</th>
                        <td>{vendedores.nombreVendedor}</td>
                        <td><button type="button" class="btn btn-warning"><Link to="/updateVd">Editar</Link></button></td>
                        <td><button type="button" id={vendedores.id} class="btn btn-danger"> X </button></td>
                        
                    </tr>
               
    );
}
export default ListVendedor;

