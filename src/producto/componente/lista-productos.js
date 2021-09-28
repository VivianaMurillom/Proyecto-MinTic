
import React from "react";
import './list.css';
//import {  Card,Button,Container,Row } from 'react-bootstrap';
import Producto from './Productos';
class Lista_Productos extends React.Component{
    getProductos() {
        return "asdas";
        }



render(){

    const datos=
    [{
        "id": 1,
        "nombreP": "Pantalones",
        "cantidad": 3,
        "precio": 15000,
        "image":"https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"
        
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 1,
        "nombreP": "Pantalones",
        "cantidad": 3,
        "precio": 15000,
        "image":"https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"
        
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 1,
        "nombreP": "Pantalones",
        "cantidad": 3,
        "precio": 15000,
        "image":"https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"
        
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    },
    {
        "id": 2,
        "nombreP": "Camisas",
        "cantidad": 2,
        "precio": 10000,
        "image":"https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
    }];

return(
    <div className="row">
        {datos.map((producto)=>(<Producto producto={producto}/>))}
        {<Lista_Productos producto={datos}/>} 
    </div>
          
);
}
} 
export default Lista_Productos