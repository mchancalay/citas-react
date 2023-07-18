import React, { useEffect, useState } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  // Campos <form>
  const [nombre, setNombre] = useState('');
  const [propietario, SetPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [err, setErr] = useState(false);

  useEffect(() => {
    if(JSON.stringify(paciente)!=='{}'){
      setNombre(paciente.nombre)
      SetPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const handlerSubmit = e => {
    e.preventDefault();
    
    // Validacion <form>
    if([nombre, propietario, email, alta, sintomas].includes('')){
      setErr(true)
    } else {
      setErr(false)

      const newPaciente = {
        id: pacientes.length+1,
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }

      if(paciente.id) {
        console.log("editing")
      } else {
        console.log("espalda")
      }
    
    

      setPacientes([...pacientes, newPaciente])

      setNombre('')
      SetPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')

    } 

  }

  return (
    <div className='lg:w-2/5 mx-5 mt-5'>
      <h2 className='text-2xl font-bold text-center'>Formulario</h2>
      <p className='text-lg mt-2 mb-6 text-center'>Agrega pacientes y <span className='text-indigo-600'>administralos</span></p>

      <form className='bg-white shadow-md rounded p-5'
        onSubmit={handlerSubmit}>
        {err && <Error msj='Todos los campos son requeridos' />}
        <label className='block font-bold uppercase text-indigo-950' htmlFor="nombre-mascota">Nombre mascota</label>
        <input 
            id='nombre-mascota'
            type="text"
            placeholder='Nombre de la mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
            />

        <label className='block font-bold uppercase text-indigo-950 mt-4' htmlFor="nombre-propietario">Nombre propietario</label>
        <input 
            id='nombre-propietario'
            type="text"
            placeholder='Nombre del propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={propietario}
            onChange={ e => SetPropietario(e.target.value)}
            />
        
        <label className='block font-bold uppercase text-indigo-950 mt-4' htmlFor="email">Correo electrónico</label>
        <input 
            id='email'
            type="email"
            placeholder='Correo electrónico' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={email}
            onChange={ e => setEmail(e.target.value)}
            />

        <label className='block font-bold uppercase text-indigo-950 mt-4' htmlFor="alta-mascota">Fecha alta</label>
        <input 
            id='alta-mascota'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={alta}
            onChange={ e => setAlta(e.target.value)}
            />

        <label className='block font-bold uppercase text-indigo-950 mt-4' htmlFor="sintomas-mascota">Síntomas</label>
        <textarea
            id='sintomas-mascota'
            placeholder='Describe los síntomas de su mascota' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={sintomas}
            onChange={ e => setSintomas(e.target.value)}
            >
          

        </textarea>

        <input 
        type="submit"
        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        className='mt-4 rounded cursor-pointer hover:bg-indigo-700 transition-colors w-full bg-indigo-600 py-3 text-white font-bold uppercase'
        />
      </form>

      
    </div>
  )
}

export default Formulario