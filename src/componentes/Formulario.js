import React, { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import './../css/formularios.css'

const Formulario = ({ agregarContacto }) => {

    // ------------ REACT HOOK FORM ---------------
    const { register, handleSubmit, errors } = useForm();

    // Imprimiendo posibles errores 
    console.log(errors);

    const onSubmit = data => {
        // La data sólo va a llegar sí y sólo sí todos los campos del form
        // han sido validados correctamente
        console.log("Formulario validado correctamente");
        console.log(JSON.stringify(data));

        // crear el contacto en la agenda
        agregarContacto(contacto);

        //let contactoAntiguo = { ...contacto };
        //contactoAntiguo.push()
        //console.log("Enviando formulario");

        //reinciar el formulario
        setContacto({
            nombres: '',
            apellidos: '',
            fechaNac: '',
            direccion: '',
            telCasa: '',
            telCelular: '',
            observaciones: ''

        });
    };

    // ------------ END REACT HOOK FORM ---------------


    {/* Objeto */ }
    const [contacto, setContacto] = useState({
        nombres: '',
        apellidos: '',
        fechaNac: '',
        direccion: '',
        telCasa: '',
        telCelular: '',
        observaciones: ''

    });


    const [error, setError] = useState(false);

    // funcion que modifica el state de acuerdo a los inputs del formulario
    const handleChange = (e) => {
        //console.log(e.target.value);
        // creando una copia del contacto antiguo
        let contactoAntiguo = { ...contacto };
        // modificando el contacto antiguo con los nuevos
        contactoAntiguo[e.target.name] = e.target.value;
        // actualizando el contacto con la copia modificada
        setContacto(contactoAntiguo);
        //console.log(e);
    }

    const enviarFormulario = (e) => {
        //Prevenir que la pagina se recargue
        e.preventDefault();
        // Validar que todos los campos estén llenos
        let { nombres, apellidos, fechaNac, telCelular, telCasa, direccion, observaciones } = contacto;
        if (nombres.trim() === "" || apellidos.trim() === "" || fechaNac.trim() === "" ||
            telCasa.trim() === "" || telCelular.trim() === "" || direccion.trim() === "" ||
            observaciones.trim() === "") {
            // hay un error y todos los campos deben ser llenados
            setError(true);
            return;
        }
        else {
            // significa que no hay errores en el formulario
            // por si acaso, cambiamos el error a false, sin importar su valor anterior
            setError(false);
            // crear el contacto en la agenda
            agregarContacto(contacto);

            //let contactoAntiguo = { ...contacto };
            //contactoAntiguo.push()
            //console.log("Enviando formulario");

            //reinciar el formulario
            setContacto({
                nombres: '',
                apellidos: '',
                fechaNac: '',
                direccion: '',
                telCasa: '',
                telCelular: '',
                observaciones: ''

            });

        }

    }

    return (
        <Fragment>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                {
                    error ?
                        <div className="col-12">
                            <div className="alert alert-danger text-center" role="alert">
                                <strong>Error!!</strong> Todos los campos, deben estar debidamente llenados
                        </div>
                        </div> : null
                }
                <div className="form-group col-md-3">
                    <label htmlFor="inputNombre">Nombres:</label>
                    <input type="text" id="inputNombre" name="nombres" className="form-control"
                        onChange={handleChange} value={contacto.nombres} ref={register({ required: true, pattern: /^[A-Z a-z]+$/i })} />
                    {errors.nombres && errors.nombres.type === "pattern" ? <p> Ingrese nombres válidos </p> : null}
                    {errors.nombres && errors.nombres.type === "required" ? <p> Este campo es obligatorio </p> : null}

                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputApellidos">Apellidos:</label>
                    <input type="text" id="inputApellidos" name="apellidos" className="form-control"
                        onChange={handleChange} value={contacto.apellidos} ref={register({ required: true, pattern: /^[A-Z a-z]+$/i })} />
                    {errors.apellidos && errors.apellidos.type === "pattern" ? <p> Ingrese apellidos válidos </p> : null}
                    {errors.apellidos && errors.apellidos.type === "required" ? <p> Este campo es obligatorio </p> : null}
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputFecha">Fecha de Nacimiento:</label>
                    <input type="date" id="inputFecha" name="fechaNac" className="form-control"
                        onChange={handleChange} value={contacto.fechaNac} ref={register({ required: true })} />
                    {errors.fechaNac && errors.fechaNac.type === "required" ? <p> Este campo es obligatorio </p> : null}
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputDireccion">Dirección:</label>
                    <input type="text" className="form-control"
                        id="inputDireccion" name="direccion"
                        onChange={handleChange} value={contacto.direccion} ref={register({ required: true })} />
                    {errors.direccion && errors.direccion.type === "required" ? <p> Este campo es obligatorio </p> : null}
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputTelCasa">Teléfono de Casa:</label>
                    {/* <input type="text" className="form-control"
                        id="inputTelCasa" name="telCasa"
            onChange={handleChange} value={contacto.telCasa} ref={register({ required: true })} />*/}
                    <NumberFormat className="form-control"
                        id="inputTelCasa" name="telCasa"
                        onChange={handleChange} 
                        value={contacto.telCasa}
                        /*error={hasError("telCasa")}
                        helperText={hasError("telCasa") && getError("telCasa")}*/
                        required={true}
                        inputRef={register({
                            required: "Phone is required"
                        })} 
                        /*ref={register({ required: true })}*/
                        format="+51 (054) ##-##-##" allowEmptyFormatting mask="_" />
                    {errors.telCasa && errors.telCasa.type === "required" ? <p> Este campo es obligatorio </p> : null}

                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputTelCelular">Telefono Celular:</label>
                    {/*<input type="text" className="form-control"
                        id="inputTelCelular" name="telCelular"
                        onChange={handleChange} value={contacto.telCelular} ref={register({ required: true })} />*/}
                    <NumberFormat className="form-control"
                        id="inputTelCelular" name="telCelular"
                        onChange={handleChange} value={contacto.telCelular} ref={register({ required: true })}
                        format="### ### ###" allowEmptyFormatting mask="_"

                    />

                    {errors.telCelular && errors.telCelular.type === "required" ? <p> Este campo es obligatorio </p> : null}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputObservaciones">Observaciones:</label>
                    <textarea cols="30" rows="2" className="form-control"
                        id="inputObservaciones" name="observaciones"
                        onChange={handleChange} value={contacto.observaciones} ref={register({ required: true })} ></textarea>
                    {errors.observaciones && errors.observaciones.type === "required" ? <p> Este campo es obligatorio </p> : null}
                </div>
                <div className="form-group col-12">
                    <button type="submit" className="btn btn-block btn-outline-primary">
                        Agregar Contacto
                </button>
                </div>
            </form>
        </Fragment>

    )
}

export default Formulario
