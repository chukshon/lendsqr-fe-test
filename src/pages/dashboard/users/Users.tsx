import React, { useEffect } from "react"
import TablePills from "../../../components/tablePills/TablePills"
import Usercard from "../../../components/userCard/Usercard"
import UserTable from "../../../components/userTable/UserTable"
import useGetAllUsers from "../../../hooks/useGetAllUsers"
import { getAllUsersService } from "../../../services/getAllUsers"
import styles from "./users.module.scss"

const Users = () => {
  const { states, allUsers, tableData } = useGetAllUsers()
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
        {tableData && (
          <div className={styles.usertable__container}>
            <UserTable
              userData={tableData}
              loading={states.loading}
              error={states.error}
              success={states.success}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
