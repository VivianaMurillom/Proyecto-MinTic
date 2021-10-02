import iconUser from '../../img/icon-user.svg';
import iconIng from '../../img/icon-btn-ingresar.svg';
import '../../ventas/components/ListaVentas.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Header from '../../components/Header';
import Alert from '../../components/Alert';

class UpdateProd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
           alerta: ""
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Nombre
        if (!fields["updProductNombre"]) {
            formIsValid = false;
            errors["updProductNombre"] = "Campo obligatorio.";
        }

        if (typeof fields["updProductNombre"] !== "undefined") {
            if (!fields["updProductNombre"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["updProductNombre"] = "Solo letras.";
            }
        }

        //Precio
        if (!fields["updProductPrecio"]) {
            formIsValid = false;
            errors["updProductPrecio"] = "Campo obligatorio.";
        }

        if (typeof fields["updProductPrecio"] !== "undefined") {
            if (!fields["updProductPrecio"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["updProductPrecio"] = "Solo números desde 0 en adelante.";
            }
        }
        //Cantidad
        if (!fields["updProductCantidad"]) {
            formIsValid = false;
            errors["updProductCantidad"] = "Campo obligatorio.";
        }

        if (typeof fields["updProductCantidad"] !== "undefined") {
            if (!fields["updProductCantidad"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["updProductCantidad"] = "Solo números desde 0 en adelante.";
            }
        }

        //Descripcion
        if (!fields["updProductDesc"]) {
            formIsValid = false;
            errors["updProductDesc"] = "Campo obligatorio.";
        }

        if (typeof fields["updProductDesc"] !== "undefined") {
            if (!fields["updProductDesc"].match(/^[a-zA-Z0-9 .:,)(-=&%\n]+$/)) {
                formIsValid = false;
                errors["updProductDesc"] = "Carácteres permitidos: .:,)(-=&%";
            }
        }


        this.setState({ errors: errors , alerta: ""});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        

        if (this.handleValidation()) {
            this.setState({alerta: "success"});
        }else{
	        this.setState({alerta: "danger"});
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields, alerta: ""});
    }
    render(){
    return (
        <div>
            <div>
                <Header />
            </div><br />
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col col-md-9 updProducto-content">
                        <div className="col-sm-auto">
                            <div className="row justify-content-center">
                                <div className="col-sm-auto">
                                    <h3>Actualizar Producto</h3>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    {this.state.alerta == "success" ? <Alert tipo="success" mensaje="Producto actualizado correctamente"/>: ""}
                                    {this.state.alerta == "danger" ? <Alert tipo="danger" mensaje="Error al actualizar el producto"/>: ""}
                                </div>
                            </div><br />
                            <form className="card" onSubmit={this.contactSubmit.bind(this)}>
                                <div className="row g-2 p-2">
                                    <div className="col-sm-5 position-relative">
                                        <label for="updProductNombre" className="form-label">Nombre</label>
                                        <div className="input-group justify-content-center">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                <img src={iconUser} className="Login-content-form-icon" alt="icono user" />
                                            </span>
                                            <input type="text" onChange={this.handleChange.bind(this, "updProductNombre")} value="Pantalones" className="form-control" id="updProductNombre" name="updProductNombre" aria-describedby="inputGroupPrepend" placeholder="Escriba el nombre del producto" required />
                                        </div>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["updProductNombre"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 position-relative">
                                        <label for="updProductPrecio" className="form-label">Precio</label>
                                        <div className="input-group has-validation  justify-content-center">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                $
                                            </span>
                                            <input type="number" onChange={this.handleChange.bind(this, "updProductPrecio")} value="12000" className="form-control" id="updProductPrecio" name="updProductPrecio" aria-describedby="inputGroupPrepend" placeholder="Escriba el precio del producto" required />
                                        </div>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["updProductPrecio"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 position-relative">
                                        <label for="updProductCantidad" className="form-label">Cantidad</label>
                                        <div className="input-group has-validation  justify-content-center">
                                            <input type="number" onChange={this.handleChange.bind(this, "updProductCantidad")} value="12" className="form-control" id="updProductCantidad" name="updProductCantidad" aria-describedby="inputGroupPrepend" placeholder="Escriba la cantidad total del producto" required />
                                        </div>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["updProductCantidad"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 position-relative">
                                        <label for="updProductDesc" className="form-label">Descripción</label>
                                        <textarea className="form-control" onChange={this.handleChange.bind(this, "updProductDesc")} value="Excelente estado." id="validationTextarea" name="updProductDesc" placeholder="Agregue una descripcion del producto" required></textarea>
                                        <div>
                                            <span style={{ color: "red" }}>{this.state.errors["updProductDesc"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-12 card-header">
                                        <div className="d-grid gap-1 d-sm-flex justify-content-center">
                                            <button type="submit" className="btn btn-primary">
                                                <img src={iconIng} className="Login-content-form-btn-icon" id="iconIng" alt="icono boton guardar"/>
                                                Guardar
                                            </button>
                                        </div>
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
export default UpdateProd;