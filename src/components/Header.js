import React from "react";
import { Link } from "react-router-dom";
import './header.css'; 
import HeaderLogin from "./HeaderLogin";
import LogoImproTic from '../img/logo-improTic.png';


class Header extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-sm-9">
                        <div class="row justify-content-between">
                            <div className="col-3">
                                <div className="p-1 align-content-start">
                                    <img src={LogoImproTic} className="img-fluid" id="logoImproTic"></img>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="p-3">
                                    <HeaderLogin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center"> 
                    <div class="col-md-9">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Ventas" class="nav-link">Gestion de Ventas</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Usuarios" class="nav-link">Gestion de Usuarios</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Productos" class="nav-link">Gestion de productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Form Login</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;