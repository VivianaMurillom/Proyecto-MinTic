import '../../ventas/components/ListaVentas.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Header from '../../components/Header';

const UpdateProd=({prod})=> {
    console.log(prod)
    return (
        <div className="GestVend">
            <header className="GestVend-header">
                <body>
                <Header/>
                    <section>

                        <aside id="izq"></aside>

                        <div class="container">


                            <h3>Actualizar Información</h3>


                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="" class="form-label">Nombre Producto</label>
                                    <input type="text" class="form-control" id="" value="Manuel "></input>

                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Precio</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div class="col-md-6">
                                    <label for="" class="form-label">Cantidad</label>
                                    <input type="number" class="form-control" id=""></input>
                                </div>
                                <div className="col-sm-12 position-relative">
                                        <label for="regProductDesc" className="form-label">Descripción</label>
                                        <textarea className="form-control" id="validationTextarea" name="regProductDesc" placeholder="Agregue una descripcion del producto" ></textarea>
                                        <div>
                                            <span ></span>
                                        </div>
                                    </div>
                                
                                
                                
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </form>



                        </div>

                        <aside id="der"></aside>

                    </section>



                    <footer> &copy; Todos los derechos reservados.</footer>





                </body>
            </header>

        </div>

    );
}
export default UpdateProd;