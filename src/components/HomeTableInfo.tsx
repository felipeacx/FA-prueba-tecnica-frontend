import { RiDeleteBinLine } from "react-icons/ri"
import { BiSolidEditAlt } from "react-icons/bi"
import { RiListView } from "react-icons/ri"
import { useGlobalContext } from "../context/hooks"
import type { UserType } from "../model/globalModel"

const HomeTableInfo = () => {
  const { users, setSelectedUser, setShowDetails, setEditUserModal, setDeleteUserModal } =
    useGlobalContext()

  function handleDelete(user: UserType) {
    setSelectedUser(user)
    setDeleteUserModal(true)
  }

  function handleEdit(user: UserType) {
    setSelectedUser(user)
    setEditUserModal(true)
  }

  function handleDetails(user: UserType) {
    setSelectedUser(user)
    setShowDetails(true)
  }

  return (
    <div className="border border-gray-300 p-4 m-4 rounded-sm w-full h-[calc(100svh-500px)] xl:h-[calc(100svh-200px)] lg:h-[calc(100svh-320px)] sm:h-[calc(100svh-300px)] overflow-auto show-scrollbar">
      <table className="w-full min-w-[350px]">
        <thead className="">
          <tr className="">
            <th>Id</th>
            <th>Nombres y apellidos</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.gender === "female" ? "Sra." : "Sr."} {user.firstName} {user.lastName}
                </td>
                <td>
                  <img src={user.image} alt={user.firstName} className="w-12 h-12" />
                </td>
                <td>
                  <div className="flex gap-3 text-3xl flex-wrap">
                    <button
                      onClick={() => handleDelete(user)}
                      className="cursor-pointer hover:opacity-70"
                    >
                      <RiDeleteBinLine />
                    </button>
                    <button
                      onClick={() => handleEdit(user)}
                      className="cursor-pointer hover:opacity-70"
                    >
                      <BiSolidEditAlt />
                    </button>
                    <button
                      onClick={() => handleDetails(user)}
                      className="cursor-pointer hover:opacity-70"
                    >
                      <RiListView />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HomeTableInfo
