import { useGlobalContext } from "../context/hooks"

const UserDetails = () => {
  const { selectedUser, setShowDetails } = useGlobalContext()

  return (
    <div className="flex flex-col">
      <p className="font-bold text-center mb-6">Detalles del Usuario</p>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.id ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.gender === "male" ? "Sr." : "Sra."}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="firstName">Nombres:</label>
        <input
          type="text"
          id="firstName"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.firstName ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="lastName">Apellidos:</label>
        <input
          type="text"
          id="lastName"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.lastName ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.image ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="gender">Género:</label>
        <input
          type="text"
          id="gender"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.gender === "male" ? "Masculino" : "Femenino"}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="text"
          id="email"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.email ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="birthDate">Fecha de nacimiento:</label>
        <input
          type="text"
          id="birthDate"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.birthDate.split("-").reverse().join("/") ?? ""}
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          className="border border-black px-0.5"
          disabled
          value={selectedUser?.phone ?? ""}
        />
      </div>
      <div className="flex justify-end mt-3 gap-3 text-sm">
        <button
          className="bg-black text-white px-8 py-0.5 cursor-pointer"
          onClick={() => setShowDetails(false)}
        >
          Guardar
        </button>
        <button
          className="bg-black text-white px-8 py-0.5 cursor-pointer"
          onClick={() => setShowDetails(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default UserDetails
