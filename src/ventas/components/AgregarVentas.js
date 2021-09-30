import './ListaVentas.css';
import React from "react";
import Header from '../../components/Header';
import ListaVentas from './ListaVentas'

const ventass = [{
    "id": 1,
    "nombreComprador": "Cristian",
    "producto": "Camisas",
    "cantidad": 5,
    "nombreVendedor": "Cristian",
    "precio": 15000
}, {
    "id": 2,
    "nombreComprador": "Cristian",
    "producto": "Camiseta",
    "cantidad": 5,
    "nombreVendedor": "Cristian",
    "precio": 15000
}]

class AgregarVenta extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            fields: {},
            errors: {},
            datos: [{
                "id": 1,
                "nombreP": "Pantalones",
                "cantidad": 3,
                "precio": 15000,
                "image": "https://m.media-amazon.com/images/I/61qMt8YrVtL._AC_UY445_.jpg"
            },
            {
                "id": 2,
                "nombreP": "Camisas",
                "cantidad": 2,
                "precio": 10000,
                "image": "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-y-trekking-viaje-de-hombre-forclaz-travel-100-gris.jpg?&f=452x452"
            }],
            vendedores: [{
                "id": 1,
                "nombreVendedor": "Manuel"
            },
            {
                "id": 2,
                "nombreVendedor": "Cristian"
            }
            ]
            
        }
    }


    
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Cliente
        if (!fields["regClientNombre"]) {
            formIsValid = false;
            errors["regClientNombre"] = "Campo obligatorio";
        }

        if (typeof fields["regClientNombre"] !== "undefined") {
            if (!fields["regClientNombre"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regClientNombre"] = "Solo letras";
            }
        }

        //Numero de documento
        if (!fields["Numdoc"]) {
            formIsValid = false;
            errors["Numdoc"] = "Campo obligatorio";
        }

        if (typeof fields["Numdoc"] !== "undefined") {
            if (!fields["Numdoc"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["Numdoc"] = "Solo números";
            }
        }
        //Productos
        if (!fields["regProduct"]) {
            formIsValid = false;
            errors["regProduct"] = "Campo obligatorio";
        }

        if (typeof fields["regProduct"] !== "undefined") {
            if (!fields["regProduct"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regProduct"] = "Solo letras";
            }
        }

        //Cantidad
        if (!fields["regCantidad"]) {
            formIsValid = false;
            errors["regCantidad"] = "Campo obligatorio";
        }

        if (typeof fields["regCantidad"] !== "undefined") {
            if (!fields["regCantidad"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["regCantidad"] = "Solo números";
            }
        }
        //Total
        if (!fields["regTotal"]) {
            formIsValid = false;
            errors["regTotal"] = "Campo obligatorio";
        }

        if (typeof fields["regTotal"] !== "undefined") {
            if (!fields["regTotal"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["regTotal"] = "Solo números";
            }
        }
        //Vendedor
        if (!fields["regVendedor"]) {
            formIsValid = false;
            errors["regVendedor"] = "Campo obligatorio";
        }

        if (typeof fields["regVendedor"] !== "undefined") {
            if (!fields["regVendedor"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regVendedor"] = "Solo letras";
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
                    nCliente: e["target"][0].value,
                    ndocument: e["target"][1].value,
                    producto: e["target"][2].value,
                    cantidad: e["target"][3].value,
                    total: e["target"][4].value,
                    vendedor: e["target"][5].value
                    
                }
            );
            products.map((produ)=>{
                alert("Venta realizada correctamente!! \n \n"
                +"Cliente: "+produ.nCliente+", "
                +"N° Documento: "+produ.ndocument+"\n"
                +"Producto: "+produ.producto+", "
                +"Cantidad: "+produ.cantidad+"\n"
                +"Vendedor: "+produ.vendedor+", "
                +"Total: "+produ.total+" ")
            })
            
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
            <div className="GestVend">
                <div>
                    <Header />
                </div>
                <header className="text-center" >
                    <body>
                        <h3>Registrar Venta</h3>
                        <form class="card text-center mb-2" onSubmit={this.contactSubmit.bind(this)} >
                            <div class="row m-2">
                                <div class="col">
                                    <label for="inputZip" class="form-label">Nombre de cliente</label>
                                    <input type="text" class="form-control" id="regClientNombre" onChange={this.handleChange.bind(this, "regClientNombre")} value={this.state.fields["regClientNombre"]} required ></input>
                                    
                                </div>
                                <div class="col">
                                    <label for="inputZip" class="form-label">Numero de documento</label>
                                    <input type="number" class="form-control" id="Numdoc" onChange={this.handleChange.bind(this, "Numdoc")} value={this.state.fields["Numdoc"]} required></input>
                                </div>
                                <div class="col">
                                    <label for="inputState" class="form-label">Producto</label>
                                    <select id="inputState" class="form-select" id="regProduct" onChange={this.handleChange.bind(this, "regProduct")} value={this.state.fields["regProduct"]} required >
                                  
                                        {this.state.datos.map((prod) => {
                                            return (
                                                <option >{prod.nombreP}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="row m-2">
                                <div class="col">

                                    <label for="inputZip" class="form-label">Cantidad</label>
                                    <input type="number" class="form-control" id="regCantidad" onChange={this.handleChange.bind(this, "regCantidad")} value={this.state.fields["regCantidad"]} required></input>

                                </div>
                                <div class="col">
                                    <label for="inputZip" class="form-label">Precio</label>
                                    <input type="text" class="form-control" id=""></input>
                                </div>
                                <div class="col">
                                    <label for="inputState" class="form-label">Vendedor</label>
                                    <select id="inputState" class="form-select" id="regVendedor" onChange={this.handleChange.bind(this, "regVendedor")} value={this.state.fields["regVendedor"]} required>
                                        
                                        {this.state.vendedores.map((vendedor) => {
                                            return (
                                                <option>{vendedor.nombreVendedor}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                            </div>

                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs">

                                    <button type="submit"
                                class="btn btn-primary mb-2">Guardar</button>


                                </ul>
                            </div>


                        </form>

                        <section>
                            <div class="card">
                                <div class="card-header" >
                                    <ul class="nav nav-tabs card-header-tabs">

                                        <h3 >Lista De Ventas</h3>


                                    </ul>
                                </div>
                                <div class="card-body">

                                    <div class="container">

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Comprador</th>
                                                    <th scope="col">Nombre Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Vendedor</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Actualizar</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {ventass.map((ventas) => (<ListaVentas ventas={ventas} />))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </section>


                        <script src="./gestor.js"></script>
                        <footer> &copy; Todos los derechos reservados.</footer>

                    </body>


                </header>
            </div>

        )

    }

}
function handleClick() {
    console.log("DEBE GUARDAR")
    const newelement = {
        "id": 2,
        "nombreComprador": "asdasds",
        "producto": "Cristian",
        "cantidad": 5,
        "nombreVendedor": "Cristian",
        "precio": 15000
    }
};

export default AgregarVenta;
