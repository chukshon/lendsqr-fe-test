import React from "react"
import styles from "./infoGroup.module.scss"

type Props = {
  data?: any
  title: string
}

const InfoGroup = ({ data, title }: Props) => {
  const objKeys: string[] = Object.keys(data!)
  return (
    <div className={styles.full__info__group}>
      <h4>{title}</h4>
      <ul className={styles.full__info__group_content}>
        {objKeys.map((item: string, index: number) => {
          return (
            <li key={index}>
              <p>{item.toUpperCase()}</p>
              <h4>{data[item]}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InfoGroup
