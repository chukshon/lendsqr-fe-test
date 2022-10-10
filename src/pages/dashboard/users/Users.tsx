import React from "react"
import Usercard from "../../../components/userCard/Usercard"
import styles from "./users.module.scss"

const Users = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.user__container__header}>Users</h3>
        <div className={styles.users__count__grid}>
          <Usercard />
          <Usercard />
          <Usercard />
          <Usercard />
        </div>
      </div>
    </div>
  )
}

export default Users
