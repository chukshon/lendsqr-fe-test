import React from "react"
import styles from "./navMenu.module.scss"
import classnames from "classnames"
import { useMenuContext } from "../../context/MenuContextProvider"
const NavMenu = () => {
  const { handleCloseOverlay, open } = useMenuContext()
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
        onClick={(e) => handleCloseOverlay(e)}
      ></div>
    </div>
  )
}

export default NavMenu
