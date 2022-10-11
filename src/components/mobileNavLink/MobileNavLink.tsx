import React from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import styles from "./mobileNavLink.module.scss"
import { AiOutlineRight } from "react-icons/ai"
import classnames from "classnames"
import { MenuProps } from "../../types/index"

const MobileNavLink = ({ title, subMenu }: MenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const handleClickAway = () => {
    // setMenuOpen(false)
  }
  const handleFilterOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.nav__list__container}>
        <span onClick={handleFilterOpen} className={styles.nav__item}>
          <p>{title}</p>
          <AiOutlineRight />
        </span>
        <ul
          className={classnames(styles.submenu__list, {
            [styles.submenu__list__active]: menuOpen,
          })}
        >
          {subMenu.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    </ClickAwayListener>
  )
}

export default MobileNavLink
