import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes";
import Cliente from "../components/Cliente";


// loader - muy similar a un useEffect, funcion que se ejecuta cuando el componente cargue, ideal para cargar un state o consultar api
export function loader() {
   const clientes = obtenerClientes()

    return clientes
}

const Index = () => {
const clientes = useLoaderData();


  return (
    <div>
        <h1 className='font-bold text-[#0d2235] text-2xl'>Clientes</h1>
        <p className=''>Administra clientes</p>

        {clientes?.length ? (
            <table className="w-full bg-white shadow-sm  mt-5 table-auto"> 
           
                <thead className="bg-[#0d2235] text-white">
                    <tr>
                        <th className="p-2">Cliente</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Cliente 
                            cliente={cliente}
                            key={cliente.id}
                        />
                    ))}
                </tbody>
            
            </table>
        ) : (
            <p className="text-center">No hay clientes</p>
        )}
    </div>
  )
}

export default Index