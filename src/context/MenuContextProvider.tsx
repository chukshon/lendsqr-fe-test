import * as React from "react"
import { MenuT } from "../types"

export const MenuContext = React.createContext<any>(null)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleCloseOverlay = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <MenuContext.Provider
      value={{ open, handleClose, handleOpen, handleCloseOverlay }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => {
  return React.useContext(MenuContext)
}
