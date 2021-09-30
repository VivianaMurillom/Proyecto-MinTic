import React from "react";
import home from "../shared/home";
import Login from '../components/Login';
import GestVend from '../ventas/components/ListaVentas';
import UpdateVend from '../components/UpdateVend';
import {BrowserRouter,Route,Switch}  from "react-router-dom";
import Lista_Productos from '../producto/componente/lista-productos';
import insertProduct from '../producto/componente/InsertProducto';
class App extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/login" component={Login}/>
    <Route path="/pag" component={GestVend} />
    <Route path="/updateVd" component={UpdateVend} />
    <Route path="/listaProducts" component={Lista_Productos} />
    <Route path="/insertProducto" component={insertProduct} />
    </Switch>
    </BrowserRouter>
);
}
} 
export default App