import { createContext } from "react"
import type { GlobalContextType } from "../model/globalModel"

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)
