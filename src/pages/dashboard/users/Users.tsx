import React, { useEffect } from "react"
import TablePills from "../../../components/tablePills/TablePills"
import Usercard from "../../../components/userCard/Usercard"
import UserTable from "../../../components/userTable/UserTable"
import { getAllUsersService } from "../../../services/getAllUsers"
import styles from "./users.module.scss"

const Users = () => {
  const initialStates = {
    loading: false,
    error: false,
    success: false,
  }
  const [states, setStates] = React.useState(initialStates)
  const localStorageUsers = JSON.parse(localStorage.getItem("users")!)
  const [allUsers, setAllUsers] = React.useState(localStorageUsers)

  const getAllUsers = async () => {
    try {
      if (!localStorageUsers) {
        setStates({ ...states, loading: true })
        const response = await getAllUsersService()
        localStorage.setItem("users", JSON.stringify(response))
        const tempUsers = response.map((user: any) => {
          return {
            id: user.id,
            Organization: user.orgName,
            Username: user.userName,
            Email: user.email,
            "Phone Number": user.phoneNumber,
            "Date Joined": user.createdAt,
            Status: <TablePills id={user.id} />,
          }
        })
        setAllUsers(tempUsers)
        setStates({ ...states, loading: false, success: true })
      }
      const tempUsers = localStorageUsers.map((user: any) => {
        return {
          id: user.id,
          Organization: user.orgName,
          Username: user.userName,
          Email: user.email,
          "Phone Number": user.phoneNumber,
          "Date Joined": user.createdAt,
          Status: <TablePills id={user.id} />,
        }
      })
      setAllUsers(tempUsers)
    } catch (err) {
      setStates({ ...states, loading: false, error: true })
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])
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
        {states.loading && <h1>Loading..</h1>}
        {!states.loading && allUsers && (
          <div className={styles.usertable__container}>
            <UserTable userData={allUsers} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
