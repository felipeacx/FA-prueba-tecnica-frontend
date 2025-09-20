import { useState } from "react"
import { useGlobalContext } from "../context/hooks"
import { updateUser } from "../api/requests"
import type { NewUserType } from "../model/globalModel"

const EditUser = () => {
  const { setEditUserModal, setInfo, selectedUser, setUsers, users } = useGlobalContext()

  const [formData, setFormData] = useState<NewUserType>({
    title: selectedUser?.gender === "male" ? "mr" : "mrs",
    firstName: selectedUser?.firstName || "",
    lastName: selectedUser?.lastName || "",
    image: selectedUser?.image || "",
    gender: selectedUser?.gender || "",
    email: selectedUser?.email || "",
    birthDate: selectedUser?.birthDate
      ? new Date(selectedUser.birthDate).toISOString().split("T")[0]
      : "",
    phone: selectedUser?.phone || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      formData.title !== "" &&
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.birthDate !== "" &&
      formData.phone !== "" &&
      formData.image !== "" &&
      formData.gender !== ""
    ) {
      const response = await updateUser(selectedUser?.id || 0, formData)
      if (response.error) {
        setInfo(response.error)
      } else {
        setInfo("Usuario actualizado correctamente")
        setUsers(
          users.map((user) => (user.id === selectedUser?.id ? { ...user, ...response } : user))
        )
      }
      setEditUserModal(false)
    } else {
      alert("Ingresa todos los campos para continuar")
      return
    }
  }

  return (
    <form className="flex flex-col" onSubmit={onEditUser}>
      <p className="font-bold text-center mb-6">Modificación de Usuario</p>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="title">Título:</label>
        <select
          name="title"
          id="title"
          className="border border-black px-0.5 w-[200px]"
          onChange={handleChange}
          value={formData.title}
        >
          <option value="">--seleccione--</option>
          <option value="mr">mr</option>
          <option value="mrs">ms</option>
          <option value="miss">mrs</option>
          <option value="ms">miss</option>
          <option value="dr">dr</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="firstName">Nombres:</label>
        <input
          type="text"
          id="firstName"
          className="border border-black px-0.5"
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="lastName">Apellidos:</label>
        <input
          type="text"
          id="lastName"
          className="border border-black px-0.5"
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          className="border border-black px-0.5"
          placeholder="Url string imagen (Buscar internet Ej: https://picsum.photos/200)"
          onChange={handleChange}
          value={formData.image}
          name="image"
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="gender">Género:</label>
        <select
          name="gender"
          id="gender"
          className="border border-black px-0.5 w-[200px]"
          onChange={handleChange}
          value={formData.gender}
        >
          <option value="">--seleccione--</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="text"
          id="email"
          className="border border-black px-0.5"
          onChange={handleChange}
          value={formData.email}
          name="email"
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="birthDate">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthDate"
          className="border border-black px-0.5 w-[200px]"
          onChange={handleChange}
          value={formData.birthDate}
          name="birthDate"
        />
      </div>
      <div className="flex justify-between gap-2 my-2">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          className="border border-black px-0.5"
          onChange={handleChange}
          value={formData.phone}
          name="phone"
        />
      </div>
      <div className="flex justify-end mt-3 gap-3 text-sm">
        <button className="bg-black text-white px-8 py-0.5 cursor-pointer" type="submit">
          Guardar
        </button>
        <button
          className="bg-black text-white px-8 py-0.5 cursor-pointer"
          onClick={() => setEditUserModal(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default EditUser
