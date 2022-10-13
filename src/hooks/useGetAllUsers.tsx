import React, { useEffect } from "react"
import TablePills from "../components/tablePills/TablePills"
import { getAllUsersService } from "../services/getAllUsers"
import { UserDataT } from "../types/index"

function useGetAllUsers() {
  const initialStates = {
    loading: false,
    error: false,
    success: false,
  }
  const [states, setStates] = React.useState(initialStates)
  const localStorageUsers = JSON.parse(localStorage.getItem("users")!)
  const [allUsers, setAllUsers] = React.useState(
    localStorageUsers ? localStorageUsers : []
  )
  const [tableData, setTableData] = React.useState(
    localStorageUsers ? localStorageUsers : []
  )

  const getAllUsers = async () => {
    try {
      if (!localStorageUsers) {
        setStates({ ...states, loading: true })
        const response = await getAllUsersService()
        setStates({ ...states, loading: false, success: true })
        localStorage.setItem("users", JSON.stringify(response))
        const tempUsers = response.map((user: UserDataT) => {
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
        setTableData(tempUsers)
        setAllUsers(response)
        return
      }
      const tempUsers = localStorageUsers.map((user: UserDataT) => {
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
      setAllUsers(localStorageUsers)
      setTableData(tempUsers)
    } catch (err) {
      setStates({ ...states, loading: false, error: true })
    }
  }
  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line
  }, [])

  return {
    states,
    allUsers,
    tableData,
  }
}

export default useGetAllUsers
