import loginLogo from '../img/Login-logo.png';
import iconUser from '../img/icon-user.svg';
import iconPass from '../img/icon-password.svg';
import iconIng from '../img/icon-btn-ingresar.svg';
import iconRec from '../img/icon-btn-recuperar.svg';
import React from "react";
import './Login.css';

class Login extends React.Component{
    render(){
        return (
            <div className="Login-content">
                <div className="Login-content-logo">
                    <img src={loginLogo} className="Login-logo" alt="logo" /><br/>
                    <span>Iniciar Sesion</span>
                </div>
                <div className="Login-content-form">
                    <form action="#">
                        <img src={iconUser} className="Login-content-form-icon" alt="icono user" />
                        <input type="text" id="inputuser" placeholder="Digite el usuario/correo"/><br/>
                        <img src={iconPass} className="Login-content-form-icon" alt="icono password" />
                        <input type="password" id="inputPass" placeholder="Digite la contraseña"/><br/>
                        <button type="submit" id="button-ingresar">
                            <img src={iconIng} className="Login-content-form-icon" id="iconIng" alt="icono boton ingresar" />
                            Ingresar
                        </button>
                        <button id="button-recuperar">
                            <img src={iconRec} className="Login-content-form-icon" id="iconRec" alt="icono boton recuperar" />
                            Recuperar
                        </button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;