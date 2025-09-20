import { deleteUser } from "../api/requests"
import { useGlobalContext } from "../context/hooks"

const ConfirmUserDelete = () => {
  const {
    selectedUser,
    setDeleteUserModal,
    setSelectedUser,
    setInfo,
    deleteUserId,
    setDeleteUserId,
  } = useGlobalContext()

  const handleConfirmDelete = async () => {
    if (!selectedUser) return
    setDeleteUserModal(false)
    const response = await deleteUser(selectedUser.id)
    if (response.error) {
      setInfo(response.error)
    } else {
      setInfo("Usuario eliminado correctamente")
      setDeleteUserId([...deleteUserId, selectedUser.id])
    }
    setSelectedUser(null)
  }

  const handleCancel = () => {
    setDeleteUserModal(false)
    setSelectedUser(null)
  }

  if (!selectedUser) return null

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Eliminar usuario</h2>
      <p>
        ¿Estás seguro de que quieres eliminar al usuario{" "}
        <strong>
          {selectedUser.firstName} {selectedUser.lastName}
        </strong>
        ?
      </p>
      <div className="flex gap-4 mt-6 justify-end text-sm">
        <button
          onClick={handleConfirmDelete}
          className="bg-black text-white px-8 py-1 cursor-pointer"
        >
          Eliminar
        </button>
        <button onClick={handleCancel} className="bg-black text-white px-8 py-1 cursor-pointer">
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default ConfirmUserDelete
