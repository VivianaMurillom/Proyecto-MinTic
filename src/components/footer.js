import React from 'react'
import {Link, link} from 'react-router-dom'
import LogoMisionTic from '../img/misiontic_logo.png';

const Footer = () => {

    return (
        <div>
            <footer className ="text-white bg-dark">
                <div className="container">
                   <nav className="row">
                    <Link to="/" className="col-sm-1 col-md-3 d-flex aling-items-center justyfy-content-center">
                    <img src={LogoMisionTic} className="img-fluid" id="LogoMisionTic"></img>
                    </Link>
                    <ul className="col-1 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2">&copy; Todos los derechos reservados.</li>
                        <li className="text-center">La Misión TIC 2022 es un programa liderado por el Gobierno del Presidente Iván Duque con un gran objetivo:  formar 100.000 jóvenes y adultos colombianos en programación, para enfrentar los desafíos de la Cuarta Revolución Industrial. En esta misión, mujeres y hombres serán elegidos y formados para ser parte de la aventura que propulsará el mundo hacia adelante.</li>
                    </ul>
                   </nav>
                </div>
            </footer>
        </div>
    )
}
export default Footer

