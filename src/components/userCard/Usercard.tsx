import React from "react"
import users_icon from "../../Assets/users_icon.svg"
import styles from "./usercard.module.scss"

const Usercard = () => {
  return (
    <div className={styles.wrapper}>
      <img src={users_icon} alt="all users" />
      <p>Users</p>
      <h3>2,453</h3>
    </div>
  )
}

export default Usercard
