import * as React from "react"
import { MenuT } from "../types"

export const MenuContext = React.createContext<any>(null)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleCloseOverlay = (e: any) => {
    if (e.target.className === "navMenu_overlay__BsKf8 navMenu_active__teA73") {
      setOpen(false)
    }
    return
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
