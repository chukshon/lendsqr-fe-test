import React from "react"
import styles from "./desktopNavLink.module.scss"
import { MenuProps } from "../../types/index"
import { NavLink } from "react-router-dom"

const DesktopNavLink = ({ title, subMenu }: MenuProps) => {
  return (
    <div className={styles.nav__list__container}>
      <span className={styles.nav__item}>
        <p>{title}</p>
      </span>
      <ul className={styles.submenu__list}>
        {subMenu.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                !isActive ? styles.submenu__link : styles.active_submenu
              }
            >
              <div></div>
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default DesktopNavLink
