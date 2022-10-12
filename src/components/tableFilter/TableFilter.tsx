import React from "react"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import styles from "./tableFilter.module.scss"
import { IoFilterSharp } from "react-icons/io5"
import InputField from "../input/InputField"
import classnames from "classnames"
import Button from "../button/Button"

const organizations = ["grape", "apple", "orange"]

const TableFilter = () => {
  const [pageWidth, setPageWidth] = React.useState(0)
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false)
  const handleClickAway = () => {
    setFilterOpen(false)
  }
  const handleFilterOpen = (e: any) => {
    setPageWidth(e.pageX)
    setFilterOpen(!filterOpen)
  }

  const initialState = {
    email: "",
    phone: "",
    date: "",
    organization: "",
    username: "",
  }

  const [values, setValues] = React.useState(initialState)
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
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(values)
    setValues(initialState)
    setFilterOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.wrapper}>
        <IoFilterSharp onClick={(e) => handleFilterOpen(e)} />
        {filterOpen && (
          <form
            onSubmit={handleSubmit}
            className={classnames(styles.filter__container, {
              [styles.width__check__700]: pageWidth > 700,
              [styles.width__check__1000]: pageWidth > 1000,
            })}
          >
            <InputField
              inputType="select"
              name="organization"
              handleChange={handleChange}
              label="Organization"
              options={organizations}
            />
            <InputField
              inputType="text"
              name="username"
              value={values.username}
              handleChange={handleChange}
              placeholder="User"
              label="Username"
            />
            <InputField
              inputType="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              placeholder="Email"
              label="Email"
            />
            <InputField
              inputType="date"
              name="date"
              value={values.date}
              handleChange={handleChange}
              placeholder="Date"
              label="Date"
            />
            <InputField
              inputType="phone"
              name="phone"
              value={values.phone}
              handleChange={handleChange}
              placeholder="Phone"
              label="Phone"
            />
            <div className={styles.button__grid}>
              <Button buttonType={"grey"} buttonText={"Reset"} />
              <Button
                buttonType={"default"}
                buttonText={"Filter"}
                type="submit"
              />
            </div>
          </form>
        )}
      </div>
    </ClickAwayListener>
  )
}

export default TableFilter
