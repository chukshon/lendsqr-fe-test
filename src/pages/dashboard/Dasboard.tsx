import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import NavMenu from "../../components/navMenu/NavMenu"
import styles from "./dashboard.module.scss"

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.left__container}>
        <NavMenu />
        <div className={styles.outlet__container}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
