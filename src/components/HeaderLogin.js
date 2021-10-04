import React, {useState} from "react";
import { Link } from "react-router-dom";
import iconUser from '../img/icon-user.svg';
import iconCarrito from '../img/icon-carrito.svg';

const HeaderLogin=({carrito}) =>{
    carrito = 3;
    const [loggIn, setLoggIn] = useState(false);
    if(loggIn){
        return(
            <div class="row justify-content-start">
                <div className="col-1">
                    <Link to="/carrito" class="position-relative">
                        <img src={iconCarrito} className="header-icon"></img>
                        <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
                            {carrito}
                        </span>
                    </Link>
                </div>
                <div className="col-1">
                    <img src={iconUser} className="header-icon"></img>
                </div>
                <div className="col-2 offset-1">
                    <button className="btn btn-outline-danger btn-sm" onClick={() => setLoggIn(false)}>Salir</button>
                </div>

            </div>
        );
    }else{
        return(
            <div class="row justify-content-end">
                <div className="col">
                    <button className="btn btn-outline-success btn-sm" onClick={() => setLoggIn(true)}>Iniciar Sesion</button>
                </div>
            </div>
        );
    }
}

export default HeaderLogin; 