import React from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import styles from "./mobileNavLink.module.scss"
import { FaCaretDown, FaCaretRight } from "react-icons/fa"
import classnames from "classnames"
import { MenuProps } from "../../types/index"
import { useMenuContext } from "../../context/MenuContextProvider"
import { useNavigate } from "react-router-dom"

const MobileNavLink = ({ title, subMenu }: MenuProps) => {
  const { handleCloseOverlay, open } = useMenuContext()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const handleClickAway = () => {
    // setMenuOpen(false)
  }
  const handleFilterOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const handleNavigation = (link: string) => {
    handleCloseOverlay()
    navigate(link)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.nav__list__container}>
        <span onClick={handleFilterOpen} className={styles.nav__item}>
          <p>{title}</p>
          {menuOpen ? (
            <FaCaretDown size={"25px"} />
          ) : (
            <FaCaretRight size={"25px"} />
          )}
        </span>
        <ul
          className={classnames(styles.submenu__list, {
            [styles.submenu__list__active]: menuOpen,
          })}
        >
          {subMenu.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleNavigation(item.link)
                }}
              >
                {item.title}
              </li>
            )
          })}
        </ul>
      </div>
    </ClickAwayListener>
  )
}

export default MobileNavLink
