import React, { useEffect, useState } from 'react'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'

const App = () => { 
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

  /*
    LocalStorage:

    Convertir el objeto o matriz en una cadena JSON utilizando:
    JSON.stringify(pacientes)

    Guardar la cadena JSON en el localStorage
    localStorage.setItem("pacientes", listaPacientesJSON);

    Obtener la cadena JSON del localStorage.
    var listaPacientesJSON = localStorage.getItem("pacientes");

    Convertir la cadena JSON de vuelta a un objeto o matriz utilizando JSON.parse().
    var listaPacientes = JSON.parse(listaPacientesJSON);
    
  */

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  },[pacientes])


  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-10 lg:flex gap-5'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App