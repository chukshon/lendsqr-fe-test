import React from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import styles from "./tableFilter.module.scss"
import { IoFilterSharp } from "react-icons/io5"
import InputField from "../input/InputField"
import classnames from "classnames"
import { style } from "@mui/system"
const TableFilter = () => {
  const [pageWidth, setPageWidth] = React.useState(0)
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false)
  const handleClickAway = () => {
    setFilterOpen(false)
  }
  const handleFilterOpen = (e: any) => {
    setPageWidth(e.pageX)
    console.log(e)
    setFilterOpen(!filterOpen)
  }

  const [values, setValues] = React.useState({
    email: "",
    phone: "",
    date: "",
    organization: "",
    username: "",
  })
  const handleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setValues((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.wrapper}>
        <IoFilterSharp onClick={(e) => handleFilterOpen(e)} />
        {filterOpen && (
          <div
            className={classnames(styles.filter__container, {
              [styles.width__check__700]: pageWidth > 700,
              [styles.width__check__1000]: pageWidth > 1000,
            })}
          >
            <InputField
              inputType="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              placeholder="Email"
            />
            <InputField
              inputType="phone"
              name="phone"
              value={values.phone}
              handleChange={handleChange}
              placeholder="Phone"
            />
            <InputField
              inputType="text"
              name="username"
              value={values.username}
              handleChange={handleChange}
              placeholder="Username"
            />
            <InputField
              inputType="date"
              name="date"
              value={values.date}
              handleChange={handleChange}
              placeholder="Date"
            />
            <select className={styles.select}>
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        )}
      </div>
    </ClickAwayListener>
  )
}

export default TableFilter
