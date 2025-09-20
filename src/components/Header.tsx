import { CgMenuGridR } from "react-icons/cg"
import { CgProfile } from "react-icons/cg"

const Header = () => {
  return (
    <header className="bg-primary grid grid-cols-12 col-span-12">
      <div className="sm:col-span-11 col-span-8 text-white text-2xl p-6">
        Módulo de Consulta y Registro de Usuarios al Sistema
      </div>
      <div className="sm:col-span-1 col-span-4 flex justify-end items-center gap-1">
        <button className="px-3">
          <CgMenuGridR className="text-4xl text-white" />
        </button>
        <button className="pr-5">
          <CgProfile className="text-5xl text-white bg-gray-500 rounded-2xl" />
        </button>
      </div>
    </header>
  )
}

export default Header
