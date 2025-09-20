import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"
import type { GlobalContextType } from "../model/globalModel"

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
}
