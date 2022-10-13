import { useRouteError } from "react-router-dom"


export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className="space-y-8">
            <h1 className="text-center mt-20 text-6xl font-bold text-[#0d2235]">CRM - Clientes</h1>
            <p className="text-center mt-10 text-2xl font-bold text-[#0d2235]">Hubo un errorr</p>
            <p className="text-center mt-10 text-xl font-bold text-red-600">{error.statusText || error.message}</p>
        </div>
    )
}