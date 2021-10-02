
import React from "react";
import './list.css';
import Producto from './Productos';
class Lista_Productos extends React.Component{
 
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
            "id": 3,
            "nombreP": "Zapatos",
            "cantidad": 8,
            "precio": 45000,
            "image":"https://comandato.vteximg.com.br/arquivos/ids/209210-1000-1000/image-4346102e21eb4aa7809cf144b4fa52c7.jpg?v=637341440451800000"

        },
        {
            "id": 4,
            "nombreP": "Reloj",
            "cantidad": 4,
            "precio": 100000,
            "image":"https://www.ktronix.com/medias/6901443320516-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjg3OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2g0Zi85MzU3NDA3ODc5MTk4LmpwZ3w1NWU0ZjY2OWM4MjMyM2JjYzg1ZjE3M2I1MjEyMTQ4NjM0ZTMzMTQ0YTVjN2FjOWY3MDQ5ZDFhYzY0NDUwMGM5"
        }];

        return(
            <div className="row">
                { datos.map((producto)=>(<Producto producto={producto} />))}
            </div>
          
);
} }
export default Lista_Productos