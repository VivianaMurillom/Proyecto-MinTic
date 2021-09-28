import loginLogo from '../img/Login-logo.png';
import iconUser from '../img/icon-user.svg';
import iconPass from '../img/icon-password.svg';
import iconIng from '../img/icon-btn-ingresar.svg';
import iconRec from '../img/icon-btn-recuperar.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import './Login.css';

class Login extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <br/>
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col col-md-4 Login-content">
                            <div className="text-center Login-content-logo">
                                <div className="col-sm-auto">
                                    <img src={loginLogo} id="login-logo" className="img-fluid" alt="logo"/><br/>
                                    <p className="h4 fw-normal fst-italic">Iniciar Sesion</p>
                                </div>
                            </div>
                            <div className="p-4 col-sm-auto">
                                <form className="needs-validation justify-content-center" novalidate>
                                    <div className="col-sm-11">
                                            <div className="input-group has-validation  justify-content-center">
                                                <span className="input-group-text" id="inputGroupPrepend">
                                                    <img src={iconUser} className="Login-content-form-icon" alt="icono user" />
                                                </span>
                                                <div className="form-floating col-9">
                                                    <input type="text" className="form-control" id="validationUsername" aria-describedby="inputGroupPrepend" placeholder="Digite el usuario/correo" required/>
                                                    <label for="validationUserName">Usuario</label>
                                                </div>
                                            </div><br/>
                                    </div>
                                    <div className="col-sm-11">
                                        <div className="input-group has-validation justify-content-center">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                <img src={iconPass} className="Login-content-form-icon" alt="icono password" />
                                            </span>
                                            <div className="form-floating col-9">
                                                <input type="password" className="form-control" id="validationPass" aria-describedby="inputGroupPrepend" placeholder="Digite la contraseña" required/>
                                                <label for="validationPass">Contraseña</label>
                                            </div>
                                        </div><br/>
                                    </div>
                                    <div className="row col-sm-12 justify-content-center">
                                        <div className="d-grid gap-1 d-sm-flex justify-content-center">
                                            <button type="submit" className="btn btn-success">
                                                <img src={iconIng} className="Login-content-form-btn-icon" id="iconIng" alt="icono boton ingresar" />
                                                Ingresar
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                <img src={iconRec} className="Login-content-form-btn-icon" id="iconRec" alt="icono boton recuperar" />
                                                Recuperar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;