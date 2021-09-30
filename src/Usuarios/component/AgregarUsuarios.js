
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import ListaUsuarios from '../../Usuarios/component/ListaUsuarios';
import GestVend from './ListaUsuarios';



class AgregarUsuario extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Nombre
        if (!fields["regNombreUser"]) {
            formIsValid = false;
            errors["regNombreUser"] = "Campo obligatorio";
        }

        if (typeof fields["regNombreUser"] !== "undefined") {
            if (!fields["regNombreUser"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regNombreUser"] = "Solo letras";
            }
        }
        

        //rol
        if (!fields["regRol"]) {
            formIsValid = false;
            errors["regRol"] = "Campo obligatorio";
        }

        if (typeof fields["regRol"] !== "undefined") {
            if (!fields["regRol"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regRol"] = "Solo letras";
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
                    rol: e["target"][1].value
                }

            );
            products.map((produ)=>{
                alert("Usuario agregado correctamente!! \n \n"
                +"Producto: "+produ.nombre+", "
                +"Precio: "+produ.rol)
               
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
        const Usuarios = [{
            "id": 1,
            "nombreVendedor": "Manuel",
            "rol":"administrador"
        },
        {
            "id": 2,
            "nombreVendedor": "Cristian",
            "rol":"vendedor"
        }
        ]
        return (
            <div className="GestVend">
                <div>
                    <Header />
                </div>
                <header className="text-center" >
                    <h3>Gestion De Vendedores</h3>
                    <body>
                        <form onSubmit={this.contactSubmit.bind(this)} class="m-4">
                            
                            <div class="row m-2">
                                <div class="col">
                                <label for="" class="form-label">Nombre Comprador</label>
                                    <input type="text" class="form-control" onChange={this.handleChange.bind(this, "regNombreUser")} value={this.state.fields["regNombreUser"]} placeholder="Escriba el usuario" required></input>
                                    
                                </div>
                                <div class="col">
                                <label for="inputZip" class="form-label" >Rol</label>
                                    <input type="number" class="form-control"onChange={this.handleChange.bind(this, "regRol")} value={this.state.fields["regRol"]} placeholder="Escriba el rol" required ></input>
                                </div>
                            
                            </div>
                            <div>
                            </div>
                            <div className="text-left " >
                                <button type="submit" class="btn btn-primary mt-2" >Guardar</button>
                            </div>
                        </form>




                        <div class="card">
                            <div class="card-header" >
                                <ul class="nav nav-tabs card-header-tabs">

                                    <h3 >Lista De Vendedores</h3>


                                </ul>
                            </div>
                            <div class="card-body">

                                <div class="container">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Usuario</th>
                                                <th scope="col">Actualizar</th>
                                                <th scope="col">Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Usuarios.map((usuarios) =>
                                                (<ListaUsuarios usuarios={usuarios} />))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <footer> &copy; Todos los derechos reservados.</footer>

                    </body>


                </header>
            </div>

        )

    }

}

export default AgregarUsuario;
