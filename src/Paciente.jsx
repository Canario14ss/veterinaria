const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


const {fecha, nombre, propietario, email, sintomas, id} = paciente

const handleEliminar = () => {
const respuesta = confirm('Deseas eliminar este paciente?')
if (respuesta){
  eliminarPaciente(id)
}
}
  return (
    <div className="mx-5 my-10 bg-white border-2 shadow-md px-5 py-10 rounded-xl">    
    <div>
          
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {' '}
            <span className="font-normal normal-case">{fecha}</span>
            </p>
                      
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case">{nombre}</span>
            </p>         

                        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal normal-case">{propietario}</span>
            </p>        
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal normal-case">{email}</span>
            </p>       
           
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:  {' '}
            <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
          <button 
          type='button'
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          onClick = {()=> setPaciente (paciente)}
         >Editar</button>
                      
           
          <button type='button'
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          onClick={handleEliminar}
          >Eliminar</button>
            
            </div> 
            </div> 
</div>   

  )
}
export default Paciente