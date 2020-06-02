import React, { Fragment } from 'react'

const ContactoSeleccionado = ({ contactoselec }) => {
    return (


        <div className="card">
            <div className="card-head bg-dark">
                <h3 className="card-title text-center text-light">Información de Contacto</h3>
            </div>
            <div className="card-body">
                {
                    // si el contacto seleccionado tuviera el attr nombres,
                    // significa que no es un objeto vacio
                    contactoselec.nombres ? (
                        <Fragment>
                            <img src="https://api.adorable.io/avatars/45/abott@adorable.png"
                                alt="" className="rounded-circle d-block m-auto" />
                            <p className="card-text"><span>Nombres: </span>{contactoselec.nombres}</p>
                            <p className="card-text"><span>Apellidos: </span>{contactoselec.apellidos}</p>
                            <p className="card-text"><span>Fecha de Nacimiento: </span>{contactoselec.fechaNac}</p>
                            <p className="card-text"><span>Dirección: </span>{contactoselec.direccion}</p>
                            <p className="card-text"><span>Teléfono de casa: </span>{contactoselec.telCasa}</p>
                            <p className="card-text"><span>Teléfono de celular: </span>{contactoselec.telCelular}</p>
                            <p className="card-text"><span>Observaciones: </span>{contactoselec.observaciones}</p>
                        </Fragment>
                    ) : <p className="card-text text-center"> {"=("} No has seleccionado ningún contacto.</p>
                }
            </div>
        </div>
    )
}

export default ContactoSeleccionado
