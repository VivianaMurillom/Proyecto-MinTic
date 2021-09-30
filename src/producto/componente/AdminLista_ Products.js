import { Link } from "react-router-dom";
const AdminLista_Products =({prod})=>{


        return (
        <tr>
        <th scope="row">1</th>
        <td>{prod.nombreP}</td>
        <td>{prod.cantidad}</td>
        <td>{prod.precio}</td>
        <td><Link to="/updateVd" ><button type="button" class="btn btn-warning">Editar</button></Link></td>
        <td><button type="button" id={prod.id} class="btn btn-danger"> X </button></td>
    </tr>
    )
    
     
        


}


export default AdminLista_Products