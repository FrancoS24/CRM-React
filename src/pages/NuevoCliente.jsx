import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { agregarCliente } from '../data/clientes'


export async function action({request}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  //Validacion
  const errores = []
    if(Object.values(datos).includes('')) {
      errores.push('Todos los campos son obligatorios')
    }

  //Validacion de email para  que tenga el formato adecuado 

  // let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  // if(!regex.test(email)) {
  //   errores.push('El email no es válido')
  // }



    //Retornar datos si hay errores
    if(Object.keys(errores).length) {
      return errores
    }

  await agregarCliente(datos)
  
  return redirect('/')
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <div className='flex justify-between mx-40'>
        <div className='flex flex-col '>
          <h1 className='font-bold text-[#0d2235] text-2xl'>Nuevos clientes</h1>
          <p className=''>Llena todos los campos para agregar un nuevo cliente</p>
        </div>

        <div className='flex justify-end'>
            <button
                className='font-bold hover:bg-[#0d2235] hover:text-white  rounded-lg w-20 h-6'
                onClick={() => navigate( -1)}
            >
              Volver

            </button>
        </div>      
      </div>
        <div className='bg-white w-3/4 shadow mx-auto p-10 mt-10'>
          
            <Form 
              method='post'
              noValidate
            >
            <Formulario />
            {errores?.length && errores.map((errores, i) => <Error>{errores}</Error>)}
            <input 
              type='submit'
              value="Registrar cliente"
              className='w-full h-10 bg-[#1e4970] text-white mt-5 cursor-pointer' 
              />
          </Form>
        </div>
    </>
  )
}

export default NuevoCliente