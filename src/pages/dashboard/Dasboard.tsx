import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"

const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Dashboard
