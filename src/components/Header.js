import React from "react";
import './header.css'; 
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return (
            <div className="container-fluid" >
                <div class=""> 
                    <div class="col-md-9">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/pag" class="nav-link">Gestion de vendedores</Link>
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