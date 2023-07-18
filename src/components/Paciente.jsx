import React from 'react'

const Paciente = ({paciente, setPaciente}) => {

  const { nombre, propietario, email, alta, sintomas } = paciente

  return (
    <div className='bg-white shadow-md rounded p-5 mb-5 mx-5'>
      <p className='block font-bold uppercase text-indigo-950'>Nombre mascota: {''}
        <span className='font-normal text-black normal-case'>{nombre}</span>
      </p>
      <p className='block font-bold uppercase text-indigo-950 mt-2'>Nombre dueño: {''}
        <span className='font-normal text-black normal-case'>{propietario}</span>
      </p>
      <p className='block font-bold uppercase text-indigo-950 mt-2'>Correo electrónico: {''}
        <span className='font-normal text-black normal-case'>{email}</span>
      </p>
      <p className='block font-bold uppercase text-indigo-950 mt-2'>Fecha alta: {''}
        <span className='font-normal text-black normal-case'>{alta}</span>
      </p>
      <p className='block font-bold uppercase text-indigo-950 mt-2'>Síntomas: {''}
        <span className='font-normal text-black normal-case'>{sintomas}</span>
      </p>
      <div className='mt-5 flex gap-2'>
        <button type='button'
                className='px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded'
                onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button type='button' 
                className='px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded'
                
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente