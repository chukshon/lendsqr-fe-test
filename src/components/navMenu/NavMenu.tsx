import React from "react"
import styles from "./navMenu.module.scss"
import classnames from "classnames"
import { useMenuContext } from "../../context/MenuContextProvider"
import { menu } from "../../data/navMenuData"
import { AiOutlineRight } from "react-icons/ai"
const NavMenu = () => {
  const { handleCloseOverlay, open } = useMenuContext()
  return (
    <>
      <div className={styles.nav__menu}>
        <div
          className={classnames(styles.nav__menu__wrapper, {
            [styles.active]: open,
            [styles.inactive]: !open,
          })}
        >
          <div className={styles.nav__menu__container}>
            {menu.map((item, index) => {
              return (
                <>
                  <ul key={index} className={styles.nav__item}>
                    <li className={styles.nav__link}>{item.title}</li>
                    <span>
                      <AiOutlineRight />
                    </span>
                  </ul>
                  {item.subMenu.map((subItem, index) => {
                    return (
                      <li key={index} className={styles.subnav__link}>
                        <p>{subItem.title}</p>
                      </li>
                    )
                  })}
                </>
              )
            })}
          </div>
        </div>
        <div
          className={classnames(styles.nav__menu__overlay, {
            [styles.overlay_active]: open,
          })}
          onClick={(e) => handleCloseOverlay(e)}
        ></div>
      </div>
    </>
  )
}

export default NavMenu
