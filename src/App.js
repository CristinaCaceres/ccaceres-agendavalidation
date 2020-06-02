import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Contactos from './componentes/Contactos';
import ContactoSeleccionado from './componentes/ContactoSeleccionado';

function App() {

  // Traemos los contactos desde el Local Storage
  let contactosLS = JSON.parse(localStorage.getItem("contactos"));
  // Si al traer los contactos del LS, no habia ninguno o
  // que estaba indefinido
  if(!contactosLS){
    // crear un arreglo vacio como para inicializar contactosLS
    contactosLS = [];
  }

  // Lista de Contactos
  const [contactos, setContactos] = useState(contactosLS);

  // Contacto Seleccionado
  const [contactoselec, setContactoSelec] = useState({});

  const agregarContacto = (objContacto) =>{
      
      let contactosAntiguo = [...contactos, objContacto];

      localStorage.setItem("contactos", JSON.stringify(contactosAntiguo));

      setContactos(contactosAntiguo);
      
      //setContactos([...contactos, objContacto]);
  }

  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda <span className="text-danger">APP</span></h1>
        <div className="row">
          <div className="col">
            {/* Formulario*/}
              <Formulario agregarContacto={agregarContacto}  />
          </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-6">
              {/* Lista de contactos*/}
              <Contactos contactos={contactos} setContactoSelec={setContactoSelec}/>
            </div>
            <div className="col-md-6">
              {/* Contacto seleccionado*/}
              <ContactoSeleccionado contactoselec={contactoselec} />
            </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
