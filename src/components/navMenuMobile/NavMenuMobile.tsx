import React from "react"
import styles from "./navMenuMobile.module.scss"
import classnames from "classnames"
import { useMenuContext } from "../../context/MenuContextProvider"
import { menu } from "../../data/navMenuData"
import { AiOutlineRight } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import MobileNavLink from "../mobileNavLink/MobileNavLink"

const NavMenuMobile = () => {
  const { handleCloseOverlay, open } = useMenuContext()
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
