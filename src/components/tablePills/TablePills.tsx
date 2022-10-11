import React from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import { BsThreeDotsVertical } from "react-icons/bs"
import styles from "./tablepills.module.scss"
import { FiUserX } from "react-icons/fi"
import { BiUserCheck } from "react-icons/bi"
import { BsEye } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const TablePills = () => {
  const navigate = useNavigate()
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false)
  const handleClickAway = () => {
    setFilterOpen(false)
  }
  const handleFilterOpen = (e: any) => {
    setFilterOpen(!filterOpen)
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div>
              <span></span>
              <p>Inactive</p>
            </div>
            <BsThreeDotsVertical
              className={styles.action__icon}
              onClick={handleFilterOpen}
            />
          </div>
        </div>
        {filterOpen && (
          <ul className={styles.actions__container}>
            <li
              onClick={() => {
                navigate("/user-details")
              }}
            >
              <BsEye />
              <p>View Details</p>
            </li>
            <li>
              <FiUserX />
              <p>Blacklist Users</p>
            </li>
            <li>
              <BiUserCheck />
              <p>Activate Users</p>
            </li>
          </ul>
        )}
      </div>
    </ClickAwayListener>
  )
}

export default TablePills
