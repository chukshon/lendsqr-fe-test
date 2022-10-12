import React from "react"
import styles from "./navMenuDesktop.module.scss"
import { menu } from "../../data/navMenuData"
import DesktopNavLink from "../desktopNavLink/DesktopNavLink"
import { NavLink } from "react-router-dom"
import user_icon from "../../Assets/menu_icons/users.svg"
import { FaAngleDown } from "react-icons/fa"

const NavMenuDesktop = () => {
  return (
    <>
      <div className={styles.nav__menu}>
        <div className={styles.nav__menu__wrapper}>
          <div className={styles.nav__menu__container}>
            <div className={styles.switch__nav}>
              <img src={user_icon} alt="" />
              <span>Switch Organization</span>
              <FaAngleDown />
            </div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                !isActive ? styles.submenu__link : styles.active_submenu
              }
            >
              <div></div>
              <img src={user_icon} alt="" />
              <span>Dashboard</span>
            </NavLink>
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
