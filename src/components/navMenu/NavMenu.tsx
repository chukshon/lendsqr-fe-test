import React from "react"
import styles from "./navMenu.module.scss"
import classnames from "classnames"

const NavMenu = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = (e: any) => {
    console.log(e.target.className)
    if (e.target.className === "header_overlay__Icu76 header_active__dknxN") {
      setOpen(false)
    }
    return
  }
  return (
    <div className={styles.nav__menu}>
      <div
        className={classnames(styles.nav__menu__container, {
          [styles.active]: open,
        })}
      ></div>
      <div
        className={classnames(styles.overlay, {
          [styles.active]: open,
        })}
        onClick={(e) => handleClose(e)}
      ></div>
    </div>
  )
}

export default NavMenu
