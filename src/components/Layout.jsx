import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/6 bg-[#0d2235] px-5 py-10 text-white text-3xl' >
            <h2 className='text-4xl' >CRM </h2>
            <nav className='mt-10 flex flex-col'>
                
                <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl hover:text-blue-300 }`} to="/">Clientes</Link>
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl hover:text-blue-300 }`} to='/clientes/nuevo'>Nuevos Clientes</Link>
               
            </nav>
        </aside>
        
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
            {/* Outlet actua como placeholder dinamico.  */}
        </main>
    </div>
  )
}

export default Layout