import React, { useState } from "react";

const Alerta=({tipo, mensaje}) =>{
    
    const [show, setShow] = useState(true);
    if(show){
        if(tipo === "success"){
            return (
            <div>
                <div className="alert alert-success">
                    <div className="alert-heading row">
                        <div className="col-sm-10 text-align-center">
                            <span>Mensaje</span>
                        </div>
                        <div className="col-sm-2 position-end">
                            <button onClick={() => setShow(false)} className="btn btn-primary" className="btn-close"></button>
                        </div>
                    </div>
                    <p>{mensaje}</p>
                </div>
            </div>
            );
        }else if(tipo === "danger"){
            return (
            <div>
                <div className="alert alert-danger">
                    <div className="alert-heading row">
                        <div className="col-sm-10 text-align-center">
                            <span>Mensaje</span>
                        </div>
                        <div className="col-sm-2 position-end">
                            <button onClick={() => setShow(false)} className="btn btn-primary" className="btn-close"></button>
                        </div>
                    </div>
                    <p>{mensaje}</p>
                </div>
            </div>
            );
        }else if(tipo === "info"){
            return (
            <div>
                <div className="alert alert-info">
                    <div className="alert-heading row">
                        <div className="col-sm-10 text-align-center">
                            <span>Mensaje</span>
                        </div>
                        <div className="col-sm-2 position-end">
                            <button onClick={() => setShow(false)} className="btn btn-primary" className="btn-close"></button>
                        </div>
                    </div>
                    <p>{mensaje}</p>
                </div>
            </div>
            );
        }
    }else{
        return(
            null
        );
    }
  }
  
  export default Alerta;