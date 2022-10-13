import React from "react"
import styles from "./usercard.module.scss"

type Props = {
  stat: {
    title: string
    count: number
    icon: string
  }
}
const Usercard = ({ stat }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={stat.icon} alt="all users" />
      <p>{stat.title}</p>
      <h3>{stat.count.toLocaleString()}</h3>
    </div>
  )
}

export default Usercard
