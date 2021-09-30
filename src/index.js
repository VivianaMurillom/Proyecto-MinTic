import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Lista_Productos from './producto/componente/lista-productos';
const container=document.getElementById('root');
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
    }];
ReactDOM.render(<App store={datos}/>,container);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
