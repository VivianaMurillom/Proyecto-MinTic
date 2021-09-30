import React from "react";
import home from "../shared/home";
import Login from '../components/Login';
import AgregarVenta from '../ventas/components/AgregarVentas';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lista_Productos from '../producto/componente/lista-productos';
import AgregarUsuario from "../Usuarios/component/AgregarUsuarios";
import insertProduct from '../producto/componente/InsertProducto';
import UpdateVentas from '../ventas/components/UpdateVentas';
class App extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={Login}/>
    <Route path="/listaProducts" component={Lista_Productos} />
    <Route path="/insertProducto" component={insertProduct} />
    <Route path="/gusuarios" component={AgregarUsuario} />
    <Route path="/updateVentas" component={UpdateVentas} />
    <Route path="/pag" component={AgregarVenta} products={this.props.store} />
    </Switch>
    </BrowserRouter>
);

}
}
export default App