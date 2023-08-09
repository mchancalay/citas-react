import React, { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, setPacientes}) => {

  const eliminarPaciente = id => {
    const nuevosPacientes = pacientes.filter(p => p.id !== id)
    setPacientes(nuevosPacientes)
  };

  return (
    <div className='lg:w-3/5 mt-5 lg:h-screen lg:overflow-y-scroll'>
      
      {pacientes.length === 0 ? (
        <>
          <h2 className='text-2xl font-bold text-center'>No hay pacientes</h2>
          <p className='text-lg mt-2 mb-6 text-center'>Agrega pacientes para su <span className='text-indigo-600'>atención</span></p>
        </>
      ) : (
        <>
          <h2 className='text-2xl font-bold text-center'>Listado Pacientes</h2>
          <p className='text-lg mt-2 mb-6 text-center'>Lista de pacientes para su <span className='text-indigo-600'>atención</span></p>
          {
            pacientes.map(paciente => (<Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>))
          }
        </>
      )}
    </div>
  )
}

export default ListadoPacientes