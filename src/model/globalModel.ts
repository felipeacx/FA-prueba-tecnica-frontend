// Definiciones de tipos para la aplicación
import type { ReactNode } from "react"

export interface GlobalContextType {
  users: UserType[]
  setUsers: (users: UserType[]) => void
  page: number
  setPage: (page: number) => void
  totalPages: number
  filterId: number | null
  setFilterId: (id: number | null) => void
  totalUsers: number
  showDetails: boolean
  setShowDetails: (show: boolean) => void
  selectedUser: UserType | null
  setSelectedUser: (user: UserType | null) => void
  deleteUserModal: boolean
  setDeleteUserModal: (show: boolean) => void
  editUserModal: boolean
  setEditUserModal: (show: boolean) => void
  createUserModal: boolean
  setCreateUserModal: (show: boolean) => void
  info: string
  setInfo: (info: string) => void
  deleteUserId: number[]
  setDeleteUserId: (ids: number[]) => void
}

export interface UserType {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export interface NewUserType {
  title: string
  firstName: string
  lastName: string
  image: string
  gender: string
  email: string
  birthDate: string
  phone: string
}
