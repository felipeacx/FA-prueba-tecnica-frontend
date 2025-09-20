import { useEffect, useState, type ReactNode } from "react"
import { GlobalContext } from "./GlobalContext"
import type { UserType } from "../model/globalModel"
import { API_URL, ITEMS_PER_PAGE } from "../utils/const"

interface GlobalProviderProps {
  children: ReactNode
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [users, setUsers] = useState<UserType[]>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [filterId, setFilterId] = useState<number | null>(null)
  const [totalUsers, setTotalUsers] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [deleteUserModal, setDeleteUserModal] = useState(false)
  const [editUserModal, setEditUserModal] = useState(false)
  const [createUserModal, setCreateUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [info, setInfo] = useState<string>("")
  const [deleteUserId, setDeleteUserId] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_URL}/user?limit=${ITEMS_PER_PAGE}&skip=${page * ITEMS_PER_PAGE}`
      )
      const data = await response.json()
      if (filterId !== null) {
        const filteredUser = data.users.filter((user: UserType) => user.id === filterId)
        if (deleteUserId.length > 0) {
          const updatedUsers = filteredUser.filter(
            (user: UserType) => !deleteUserId.includes(user.id)
          )
          setUsers(updatedUsers)
          return
        }
        setUsers(filteredUser)
      } else {
        if (deleteUserId.length > 0) {
          const updatedUsers = data.users.filter(
            (user: UserType) => !deleteUserId.includes(user.id)
          )
          setUsers(updatedUsers)
          return
        } else {
          setUsers(data.users)
        }
      }
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE))
      setTotalUsers(data.total)
    }
    fetchData()
  }, [page, filterId, deleteUserId])

  useEffect(() => {
    if (info) {
      const timer = setTimeout(() => {
        setInfo("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [info])

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        page,
        setPage,
        totalPages,
        filterId,
        setFilterId,
        totalUsers,
        showDetails,
        setShowDetails,
        selectedUser,
        setSelectedUser,
        deleteUserModal,
        setDeleteUserModal,
        editUserModal,
        setEditUserModal,
        createUserModal,
        setCreateUserModal,
        info,
        setInfo,
        deleteUserId,
        setDeleteUserId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
