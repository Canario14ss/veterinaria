import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [fecha, setFecha] = useState ('');
  const [nombre, setNombre] = useState ('');
  const [propietario, setPropietario] = useState ('');
  const [email, setEmail] = useState ('');
  const [sintomas, setSintomas] = useState ('');
  const [error, setError] = useState(false);

   useEffect (() => {
   if (Object.keys(paciente).length > 0) {
    
   setNombre(paciente.nombre)
   setPropietario(paciente.propietario)
   setEmail(paciente.email)
   setFecha(paciente.fecha)
   setSintomas(paciente.sintomas)
  }
  }
  ,[paciente])


  const generarId= (e)=> {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36)
  return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([ fecha, nombre, propietario, email, sintomas ].includes('')){
    console.log('Hay al menos un campo vacio')
    setError(true) 
    return;
    }
  
    setError(false)
    setPacientes(nombre)
      
    const objetoPaciente = {
      fecha,
      nombre,
      propietario,
      email,
      sintomas,
      }
      
    
      if (paciente.id) {
        //editando el registro 
        objetoPaciente.id = paciente.id
      
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})
      }
        else {
       //nuevo objeto
       objetoPaciente.id = generarId();
       setPacientes([...pacientes, objetoPaciente])
      }

         //limpia formulario

    setFecha('')
    setNombre('')
    setPropietario('')
    setEmail('')
    setSintomas('')
    }
  


  return (

    <div className='md:w-1/2 lg:w-2/5 mx-5'>

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {' '}
      
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

     <form 
     onSubmit={handleSubmit}
     className="bg bg-white shadow-md rounded-xl lg py-10 px-5 mb-10">


      { error &&  <Error><p>Todos los campoos son obligatorios</p></Error> }
     <div className="mb-5"> 

            <label htmlFor="alta" className="block text-gray-700 font-bold upp uppercase">Fecha de alta</label>
          <input 
          id="alta"
          type="date" 
          placeholder="Fecha"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={(e)=> setFecha(e.target.value)}

           />
           </div> 


        <div className="mb-5"> 


          <label htmlFor="mascota" className="block text-gray-700 font-bold upp uppercase">Nombre Mascota</label>
          <input 
          id="mascota"
          type="text" 
          placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}

          />

         </div>


         <div className="mb-5"> 


          <label htmlFor="propietario" className="block text-gray-700 font-bold upp uppercase">Propietario</label>
          <input 
          id="propietario"
          type="text" 
          placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value)}
         />        
  
        </div>

        <div className="mb-5"> 


          <label htmlFor="email" className="block text-gray-700 font-bold upp uppercase">Email</label>
          <input 
          id="email"
          type="email" 
          placeholder="Email Contacto"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />        

</div>  


<div className="mb-5"> 


<label htmlFor="sintomas" className="block text-gray-700 font-bold upp uppercase">Sintomas</label>
<textarea
id="sintomas" 
placeholder="Describe los sintomas"
className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
value={sintomas}
onChange={(e)=> setSintomas(e.target.value)}
/>        

</div>  
<input
className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-violet-800 cursor-pointer rounded transition-colors"
value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'}
type="submit"
/>
    </form>
     </div>

      
  )
  }

export default Formulario