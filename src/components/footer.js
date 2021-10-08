import React from 'react'
import {Link} from 'react-router-dom'
import LogoMisionTic from '../img/misiontic_logo.png';
import {Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

    return (
        <div class="container-fluid">
            <footer className ="text-white bg-dark py-2">
                <div className="row d-flex">
                    <Link to="/" className="col-12 col-md-5">
                        <Image src= {LogoMisionTic} rounded/>
                    </Link>
                    <p className="col-12 col-md-4 mt-5 mb-5 text-center aling list-unstyled aling-items-center justyfy-content-center">
                        La Misión TIC 2022 es un programa liderado por el Gobierno del Presidente Iván Duque con un gran objetivo: formar 100.000 jóvenes y adultos colombianos en programación, para enfrentar los desafíos de la Cuarta Revolución Industrial. En esta misión, mujeres y hombres serán elegidos y formados para ser parte de la aventura que propulsará el mundo hacia adelante.
                    </p>
                        
                    <ul className="col-12 col-md-3 mt-5 mb-5 aling list-unstyled aling-items-center justyfy-content-center">
                            <li className="text-center mt-3 mb-5">Redes sociales</li>
                            <li className="text-center">Facebook</li>
                            <li className="text-center">Instagram</li>
                            <li className="text-center">Telegram</li>
                    </ul>
                </div>
                <div className="font-weight-bold mb-2 text-center negrilla">
                    &copy; Todos los derechos reservados.
                </div>
            </footer>
        </div>
    )
}
export default Footer

