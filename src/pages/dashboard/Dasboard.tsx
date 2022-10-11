import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import NavMenuDesktop from "../../components/navMenuDesktop/NavMenuDesktop"
import NavMenuMobile from "../../components/navMenuMobile/NavMenuMobile"
import styles from "./dashboard.module.scss"

const Dashboard = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.left__container}>
        {width < 1200 && <NavMenuMobile />}
        {width > 1200 && <NavMenuDesktop />}
        <div className={styles.outlet__container}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
