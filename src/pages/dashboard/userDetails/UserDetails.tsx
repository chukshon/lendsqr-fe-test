import React from "react"
import styles from "./userDetails.module.scss"
import { CgArrowLongLeft } from "react-icons/cg"
import Button from "../../../components/button/Button"

const UserDetails = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.back__btn}>
        <span className={styles.back__btn__icon}>
          <CgArrowLongLeft size={"20px"} />
        </span>
        <span className={styles.back__btn__text}>Back to Users</span>
      </button>
      <div className={styles.top__container}>
        <h3>User Details</h3>
        <div className={styles.button__group}>
          <Button buttonType={"red"} buttonText={"BLACKLIST USER"} />
          <Button buttonType={"green"} buttonText={"ACTIVATE USER"} />
        </div>
      </div>
    </div>
  )
}

export default UserDetails
