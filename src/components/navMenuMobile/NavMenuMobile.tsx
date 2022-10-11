import React from "react"
import styles from "./navMenuMobile.module.scss"
import classnames from "classnames"
import { useMenuContext } from "../../context/MenuContextProvider"
import { menu } from "../../data/navMenuData"

import { IoMdClose } from "react-icons/io"
import MobileNavLink from "../mobileNavLink/MobileNavLink"
import { useNavigate } from "react-router-dom"

const NavMenuMobile = () => {
  const navigate = useNavigate()
  const { handleCloseOverlay, open } = useMenuContext()
  const handleNavigation = (link: string) => {
    handleCloseOverlay()
    navigate(link)
  }
  return (
    <>
      <nav
        className={classnames(styles.nav__menu, {
          [styles.active]: open,
          [styles.inactive]: !open,
        })}
      >
        <div className={styles.close__menu}>
          <IoMdClose onClick={handleCloseOverlay} size={"30px"} />
        </div>
        <div
          className={classnames(styles.nav__menu__wrapper, {
            [styles.active]: open,
            [styles.inactive]: !open,
          })}
        >
          <ul className={styles.nav__menu__container}>
            <li
              className={styles.nav__item}
              onClick={() => {
                handleNavigation("/")
              }}
            >
              DASHBOARD
            </li>
            {menu.map((item, index) => {
              return (
                <MobileNavLink
                  title={item.title}
                  subMenu={item.subMenu}
                  key={index}
                />
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavMenuMobile
