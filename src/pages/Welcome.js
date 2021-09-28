import React from "react";
import App from "../App";
import { } from 'react-bootstrap';
import GestVend from '../components/ListaVentas';
import UpdateVend from '../components/UpdateVend';
import Listaproduct from '../components/Listaproduct';
import {BrowserRouter,Route,Switch}  from "react-router-dom";
class Lista extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/pag" component={GestVend} />
    <Route path="/updateVd" component={UpdateVend} />
    <Route path="/Listaproduct" component={Listaproduct} />
    </Switch>
    </BrowserRouter>
);
}
} 
export default Lista