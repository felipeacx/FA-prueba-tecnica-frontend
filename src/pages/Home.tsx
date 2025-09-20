import HomePagination from "../components/HomePagination"
import HomeTableInfo from "../components/HomeTableInfo"
import Modal from "../components/Modal"
import { useGlobalContext } from "../context/hooks"
import ConfirmUserDelete from "./ConfirmUserDelete"
import CreateUser from "./CreateUser"
import EditUser from "./EditUser"
import UserDetails from "./UserDetails"

const Home = () => {
  const {
    filterId,
    setFilterId,
    showDetails,
    setShowDetails,
    editUserModal,
    setEditUserModal,
    createUserModal,
    setCreateUserModal,
    deleteUserModal,
    setDeleteUserModal,
    info,
  } = useGlobalContext()

  return (
    <>
      {/* Página principal componetizada */}
      <main className="flex flex-col items-center justify-start w-full sm:px-20 mt-4">
        <div className="flex gap-4 justify-end w-full">
          <input
            type="number"
            placeholder="Id a buscar"
            className="border border-gray-300 rounded-sm p-2"
            value={filterId ?? ""}
            onChange={(e) => setFilterId(e.target.value ? Number(e.target.value) : null)}
          />
          <button
            onClick={() => setCreateUserModal(true)}
            className="bg-primary text-white rounded-sm py-2 px-3"
          >
            Crear usuario
          </button>
        </div>
        <HomeTableInfo />
        {info && <p className="text-primary">{info}</p>}
        <HomePagination />
      </main>
      <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
        <UserDetails />
      </Modal>
      <Modal isOpen={editUserModal} onClose={() => setEditUserModal(false)}>
        <EditUser />
      </Modal>
      <Modal isOpen={createUserModal} onClose={() => setCreateUserModal(false)}>
        <CreateUser />
      </Modal>
      <Modal isOpen={deleteUserModal} onClose={() => setDeleteUserModal(false)}>
        <ConfirmUserDelete />
      </Modal>
    </>
  )
}

export default Home
