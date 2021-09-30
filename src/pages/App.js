import React from "react";
import home from "../shared/home";
import Login from '../components/Login';
import AgregarVenta from '../ventas/components/AgregarVentas';
import UpdateVend from '../components/UpdateVend';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lista_Productos from '../producto/componente/lista-productos';
import AgregarUsuario from "../Usuarios/component/AgregarUsuarios";
import insertProduct from '../producto/componente/InsertProducto';
class App extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={Login}/>
    <Route path="/updateVd" component={UpdateVend} />
    <Route path="/listaProducts" component={Lista_Productos} />
    <Route path="/insertProducto" component={insertProduct} />
    <Route path="/gusuarios" component={AgregarUsuario} />
    <Route path="/pag" component={AgregarVenta} products={this.props.store} />
    </Switch>
    </BrowserRouter>
);

}
}
export default App