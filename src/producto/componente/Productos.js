const Producto=({producto})=>{
  
    return(
      <div className="p-1 col">
        <div className="card" style={{width:'9rem'}}>
          <img src={producto.image} className="card-img-top" alt="productos"/>
          <div className="card-body">
            <h5 className="card-title">{producto.nombreP}</h5>
            <p className="card-text">$ {producto.precio}</p>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    );
}
export default Producto;