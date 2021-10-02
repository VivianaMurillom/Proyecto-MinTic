import ListaUsuarios from './ListaUsuarios';
import React from "react";
import Header from '../../components/Header';
import Alert from '../../components/Alert';

const lista_usuarios = [{
    "id": 1,
    "nombre": "Manuel",
    "apellido":"Diaz",
    "tipo_identificacion":"Cedula",
    "numero_documento":"123512",
    "rol":"Vendendor"
},
{
    "id": 2,
    "nombre": "Juan",
    "apellido":"Perez",
    "tipo_identificacion":"Cedula",
    "numero_documento":"6345323",
    "rol":"administrador"
}
]

class AgregarUsuario extends React.Component {

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
        if (!fields["regnombre"]) {
            formIsValid = false;
            errors["regnombre"] = "Campo obligatorio";
        }

        if (typeof fields["regnombre"] !== "undefined") {
            if (!fields["regnombre"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regnombre"] = "Solo letras";
            }
        }
        

        //apellido
        if (!fields["regapellido"]) {
            formIsValid = false;
            errors["regapellido"] = "Campo obligatorio";
        }

        if (typeof fields["regapellido"] !== "undefined") {
            if (!fields["regapellido"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regapellido"] = "Solo letras";
            }
        }

         //tipo_documento
         if (!fields["regtipo_identificacion"]) {
            formIsValid = false;
            errors["regtipo_identificacion"] = "Campo obligatorio";
        }

        if (typeof fields["regtipo_identificacion"] !== "undefined") {
            if (!fields["regtipo_identificacion"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regtipo_identificacion"] = "Solo letras";
            }
        }

         //documento
         if (!fields["regdocumento"]) {
            formIsValid = false;
            errors["regdocumento"] = "Campo obligatorio";
        }

        if (typeof fields["regdocumento"] !== "undefined") {
            if (!fields["regdocumento"].match(/^[0-9 ]+$/)) {
                formIsValid = false;
                errors["regdocumento"] = "Solo numeros";
            }
        }

          //rol
          if (!fields["regrol"]) {
            formIsValid = false;
            errors["regrol"] = "Campo obligatorio";
        }

        if (typeof fields["regrol"] !== "undefined") {
            if (!fields["regrol"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["regrol"] = "Solo letras";
            }
        }

       


        this.setState({ errors: errors });
        return formIsValid;
    }


    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            lista_usuarios.push(
                {
                    nombre: e["target"][0].value,
                    apellido: e["target"][1].value,
                    tipo_identificacion: e["target"][2].value,
                    numero_documento: e["target"][3].value,
                    rol: e["target"][4].value,
                } );
            this.setState({alerta: "success"});
        }else{
	        this.setState({alerta: "danger"});
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
                    <h3>Agregar Usuarios</h3>
                    <body>
                    <div className="row justify-content-center">
                                    <div className="col-sm-6">
                                        {this.state.alerta == "success" ? <Alert tipo="success" mensaje="Usuario agregado correctamente"/>: ""}
                                        {this.state.alerta == "danger" ? <Alert tipo="danger" mensaje="Error al agregar el usuario"/>: ""}
                                    </div>
                     </div><br />
                        <form onSubmit={this.contactSubmit.bind(this)} className="m-4">
                            
                            <div className="row m-2">
                                <div className="col">
                                <label for="nombre" className="form-label">Nombre </label>
                                    <input type="text" className="form-control" onChange={this.handleChange.bind(this, "regnombre")} value={this.state.fields["regnombre"]} placeholder="Escriba el usuario" id="nombre" name="nombre" required></input>
                                     
                                </div>
                                <div className="col">
                                <label for="apellido" className="form-label" >Apellido</label>
                                    <input type="text" className="form-control"onChange={this.handleChange.bind(this, "regapellido")} value={this.state.fields["regapellido"]} placeholder="Escriba el apellido" id="apellido" name="apellido" required ></input>
                                   
                                </div>
                            
                                <div className="col">
                                <label for="tipo_identificacion" className="form-label" >Tipo identificacion</label>
                                    <select className="form-select" onChange={this.handleChange.bind(this, "regtipo_identificacion")} value={this.state.fields["regtipo_identificacion"]} id="tipo_identificacion" name="tipo_identificacion">
                                        <option value="Cedula">Cedula</option>
                                        <option value="Tarjeta">Tarjeta</option>
                                        <option value="Cedula Extranjera">Cedula Extranjera</option>
                                        
                                    </select>
                        
                                </div>
                            </div>
                            <div className="row m-2">   

                                <div className="col">
                                <label for="documento" className="form-label" >Cedula</label>
                                    <input type="text" className="form-control"onChange={this.handleChange.bind(this, "regdocumento")} value={this.state.fields["regdocumento"]} placeholder="Escriba su documento" id="documento" name="documento" required ></input>
                                    
                                </div>

                                
                                <div className="col">
                                <label for="rol" className="form-label" >Rol</label>
                                    <select name="rol" id="rol" className="form-select" onChange={this.handleChange.bind(this, "regrol")} value={this.state.fields["regrol"]}>
                                        <option value="Administrador" >Administrador</option>
                                        <option value="Vendedor" >Vendedor</option>
                                        
                                    </select>
                                
                                </div>
                            
                            </div>
                            <div>
                            </div>
                            <div classNameName="text-left " >
                                <button type="submit" className="btn btn-primary mt-2" >Guardar</button>
                            </div>
                        </form>




                        <div className="card">
                            <div className="card-header" >
                                <ul className="nav nav-tabs card-header-tabs">

                                    <h3 >Lista De Vendedores</h3>


                                </ul>
                            </div>
                            <div className="card-body">

                                <div className="container">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Apellido</th>
                                                <th scope="col">Tipo Documento</th>
                                                <th scope="col">N° Documento</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Actualizar</th>
                                                <th scope="col">Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ListaUsuarios  usu={lista_usuarios}/> 
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
