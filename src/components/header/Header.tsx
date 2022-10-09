import React from "react"
import styles from "./header.module.scss"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import logo from "../../Assets/logo.svg"
import avatar from "../../Assets/avatar.png"
import { AiFillCaretDown } from "react-icons/ai"
import { IoIosNotificationsOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header__container}>
        <HiOutlineMenuAlt2 size="26px" className={styles.navbar__toggle} />
        <div className={styles.header__logo}>
          <img src={logo} alt="header__logo" />
        </div>
        <div className={styles.search__bar}>
          <SearchBar />
        </div>
        <div className={styles.left__container}>
          <Link to="">Docs</Link>
          <IoIosNotificationsOutline
            className={styles.notification}
            size="26px"
          />
          <div className={styles.profile__container}>
            <img src={avatar} alt="" />
            <div className={styles.content}>
              <p className="profile__name">Adedeji</p>
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
