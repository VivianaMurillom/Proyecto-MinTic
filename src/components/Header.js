import React from "react";
import { Link } from "react-router-dom";
import './header.css'; 

import LogoImproTic from '../img/logo-improTic.png';
import User from '../img/icon-user.svg';


class Header extends React.Component{
    render(){
        console.log(this.props.products)
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-sm-9">
                        <div class="row justify-content-between">
                            <div className="col-3">
                                <div className="p-1 align-content-start">
                                    <img src={LogoImproTic} className="img-fluid"></img>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="p-3 align-content-end">
                                    <img src={User} className="img-fluid"></img>
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
                                <Link to="/pag" class="nav-link">Gestion de ventas</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/gvendedores" class="nav-link">Gestion de vendedores</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;