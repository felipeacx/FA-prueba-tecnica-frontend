import type { NewUserType } from "../model/globalModel"
import { API_URL } from "../utils/const"

export const deleteUser = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  })
  return response.json()
}

export const createUser = async (user: NewUserType) => {
  const response = await fetch(`${API_URL}/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  return response.json()
}
export const updateUser = async (id: number, user: Partial<NewUserType>) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  return response.json()
}
