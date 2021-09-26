import React from "react";
import App from "../App";
import Login from '../components/Login';
import GestVend from '../components/ListaVentas';
import UpdateVend from '../components/UpdateVend';
import {BrowserRouter,Route,Switch}  from "react-router-dom";
class Lista extends React.Component{
     
render(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login}/>
    <Route path="/pag" component={GestVend} />
    <Route path="/updateVd" component={UpdateVend} />
    </Switch>
    </BrowserRouter>
);
}
} 
export default Lista