import { redirect, useNavigate, Form } from "react-router-dom"
import { eliminarCliente } from "../data/clientes"

export async function action({params}) {
   await eliminarCliente(params.clienteId)
   console.log('hola che en que andas')
    return redirect('/')
}

const Cliente = ({cliente}) => {

    const navigate = useNavigate()
    const { nombre, empresa, email, telefono, id } = cliente

  return (
    <>
        <tr className="border-b ">
            <td className="p-4 space-y-2"> 
                <p className="text-xl font-medium text-[#0d2235]">{cliente.nombre}</p>
                <p className="text-lg text-[#0d2235]">{cliente.empresa}</p>
            </td>
            <td>
                <p className="text-[#0d2235]"><span className="text-[#0d2235] font-extrabold">Email: </span>{cliente.email}</p>
                <p className="text-[#0d2235]"><span className="text-[#0d2235] font-bold">Tel: </span>{cliente.telefono}</p>
            </td>
            <td className="flex flex-col text-center">
                <button
                    type="button"
                    className="text-blue-400 hover:text-blue-600 hover:font-black font-bold mt-4"
                    onClick={ () => navigate(`/clientes/${id}/editar`)}
                >
                    Editar
                </button>

                <Form
                method='post'
                action={`/clientes/${id}/eliminar`}
                onSubmit={(e) => {
                    if(confirm('Deseas eliminar este cliente?')){
                        e.preventDefault()
                    }
                }}
                >
                <button
                    type="button"
                    className="text-red-400 hover:text-red-600 hover:font-black font-bold mt-2"
                >
                    Eliminar
                </button>
                </Form>

            </td>
        </tr>
    </>
  )
}

export default Cliente