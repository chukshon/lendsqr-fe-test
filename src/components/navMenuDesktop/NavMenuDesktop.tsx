import React from "react"
import styles from "./navMenuDesktop.module.scss"
import classnames from "classnames"
import { useMenuContext } from "../../context/MenuContextProvider"
import { menu } from "../../data/navMenuData"
import { AiOutlineRight } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import DesktopNavLink from "../desktopNavLink/DesktopNavLink"

const NavMenuDesktop = () => {
  const { handleCloseOverlay, open } = useMenuContext()
  return (
    <>
      <div className={styles.nav__menu}>
        <div className={styles.nav__menu__wrapper}>
          <div className={styles.nav__menu__container}>
            {menu.map((item, index) => {
              return (
                <DesktopNavLink
                  title={item.title}
                  subMenu={item.subMenu}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMenuDesktop
