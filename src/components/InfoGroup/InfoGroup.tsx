import React from "react"
import styles from "./infoGroup.module.scss"

type Props = {
  data?: any
  title: string
}

const InfoGroup = ({ data, title }: Props) => {
  const objKeys = Object.keys(data)
  return (
    <div className={styles.full__info__group}>
      <h4>{title}</h4>
      <ul className={styles.full__info__group_content}>
        {objKeys?.map((item: any, index: any) => {
          return (
            <li>
              <p>{item.toUpperCase()}</p>
              <h4>{data[item]}</h4>
            </li>
          )
        })}
        {/* <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li>
        <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li>
        <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li>
        <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li>
        <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li>
        <li>
          <p>Full Name</p>
          <h4>Grace Effiom</h4>
        </li> */}
      </ul>
    </div>
  )
}

export default InfoGroup
