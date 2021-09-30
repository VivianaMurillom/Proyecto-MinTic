import iconUser from '../../img/icon-user.svg';
import iconPass from '../../img/icon-password.svg';
import iconIng from '../../img/icon-btn-ingresar.svg';
import iconRec from '../../img/icon-btn-recuperar.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header';
import List from './lista-productos';
import AdminLista_Products from './AdminLista_ Products';

class insertProducto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            datos:
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
    }]
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Nombre
        if (!fields["regProductNombre"]) {
            formIsValid = false;
            errors["regProductNombre"] = "Campo obligatorio";
        }

        if (typeof fields["regProductNombre"] !== "undefined") {
            if (!fields["regProductNombre"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regProductNombre"] = "Solo letras";
            }
        }

        //Precio
        if (!fields["regProductPrecio"]) {
            formIsValid = false;
            errors["regProductPrecio"] = "Campo obligatorio";
        }

        if (typeof fields["regProductPrecio"] !== "undefined") {
            if (!fields["regProductPrecio"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["regProductPrecio"] = "Solo números";
            }
        }

        //Descripcion
        if (!fields["regProductDesc"]) {
            formIsValid = false;
            errors["regProductDesc"] = "Campo obligatorio";
        }

        if (typeof fields["regProductDesc"] !== "undefined") {
            if (!fields["regProductDesc"].match(/^[a-zA-Z0-9 .:,)(-=&%\n]+$/)) {
                formIsValid = false;
                errors["regProductDesc"] = "Carácteres permitidos: .:,)(-=&%";
            }
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    contactSubmit(e) {
        e.preventDefault();
        const products = [];

        if (this.handleValidation()) {
            products.push(
                {
                    nombre: e["target"][0].value,
                    precio: e["target"][1].value,
                    descripcion: e["target"][2].value
                }
            );
            //alert(products[0]["nombre"]+products[0]["precio"]+products[0]["descripcion"]);
            alert("Producto agregado correctamente");
        } else {
            alert("Error al agregar.");
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render() {
        return (
            <div>
                <div>
                    <Header />
                </div><br />
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col col-md-7 regProducto-content">
                            <div className="col-sm-auto">
                                <div className="row justify-content-center">
                                    <div className="col-sm-auto">
                                        <h3>Agregar Producto</h3>
                                    </div>
                                </div><br />
                                <form className="row g-2" onSubmit={this.contactSubmit.bind(this)}>
                                    <div class="col-sm-6 position-relative">
                                        <label for="regProductNombre" class="form-label">Nombre</label>
                                        <div className="input-group justify-content-center">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                <img src={iconUser} className="Login-content-form-icon" alt="icono user" />
                                            </span>
                                            <input type="text" onChange={this.handleChange.bind(this, "regProductNombre")} value={this.state.fields["regProductNombre"]} className="form-control" id="regProductNombre" name="regProductNombre" aria-describedby="inputGroupPrepend" placeholder="Escriba el nombre del producto" required />
                                        </div>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["regProductNombre"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 position-relative">
                                        <label for="regProductPrecio" className="form-label">Precio</label>
                                        <div className="input-group has-validation  justify-content-center">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                $
                                            </span>
                                            <input type="number" onChange={this.handleChange.bind(this, "regProductPrecio")} value={this.state.fields["regProductPrecio"]} className="form-control" id="regProductPrecio" name="regProductPrecio" aria-describedby="inputGroupPrepend" placeholder="Escriba el precio del producto" required />
                                        </div>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["regProductPrecio"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 position-relative">
                                        <label for="regProductDesc" className="form-label">Descripción</label>
                                        <textarea className="form-control" onChange={this.handleChange.bind(this, "regProductDesc")} value={this.state.fields["regProductDesc"]} id="validationTextarea" name="regProductDesc" placeholder="Agregue una descripcion del producto" required></textarea>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["regProductDesc"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid gap-1 d-sm-flex justify-content-center">
                                            <button type="submit" className="btn btn-success">
                                                <img src={iconIng} className="Login-content-form-btn-icon" id="iconIng" alt="icono boton guardar" />
                                                Guardar
                                            </button>
                                            <button type="submit" className="btn btn-danger">
                                                <img src={iconRec} className="Login-content-form-btn-icon" id="iconRec" alt="icono boton cancelar" />
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                            <div class="card mt-3">
                                <div class="card-header" >
                                    <ul class="nav nav-tabs card-header-tabs">

                                        <h3 >Lista De Productos</h3>


                                    </ul>
                                </div>
                                <div class="card-body">

                                    <div class="container">

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Nombre Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Precio</th>
                                                    <th scope="col">Actualizar</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            {this.state.datos.map((prod) => (<AdminLista_Products prod={prod} />))}
                                              

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </section>

            </div>
        );
    }
}


export default insertProducto;