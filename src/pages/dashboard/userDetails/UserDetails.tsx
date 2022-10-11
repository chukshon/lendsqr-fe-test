import React from "react"
import styles from "./userDetails.module.scss"
import { CgArrowLongLeft } from "react-icons/cg"
import Button from "../../../components/button/Button"
import profile__avatar from "../../../Assets/profile_avatar.svg"
import filled__star from "../../../Assets/filled__star.svg"
import unfilled__star from "../../../Assets/unfilled__star.svg"
import InfoGroup from "../../../components/InfoGroup/InfoGroup"
import { useNavigate } from "react-router-dom"

const UserDetails = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.back__btn}
        onClick={() => {
          navigate("/users")
        }}
      >
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
      <div className={styles.basic__info__container}>
        <div className={styles.basic__info}>
          <div className={styles.col__1}>
            <img src={profile__avatar} alt="profile avatar" />
            <div className={styles.content}>
              <h4>Grace Effiom</h4>
              <p>LSQFf587g90</p>
            </div>
          </div>
          <div className={styles.col__2}>
            <p>User Tier</p>
            <div className={styles.star__group}>
              <img src={filled__star} alt="" />
              <img src={unfilled__star} alt="" />
              <img src={unfilled__star} alt="" />
            </div>
          </div>
          <div className={styles.col__3}>
            <h4>₦200,000.00</h4>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <ul className={styles.basic__info__tabs}>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
      <div className={styles.full__info__container}>
        <InfoGroup />
        <InfoGroup />
        <InfoGroup />
      </div>
    </div>
  )
}

export default UserDetails
