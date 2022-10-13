import React from "react"
import styles from "./input.module.scss"

type Props = {
  inputType: "email" | "password" | "text" | "phone" | "date" | "select"
  placeholder?: string
  name?: string
  value?: string
  handleChange?: (
    se:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
  label?: string
  options?: string[]
  id?: string
}

const InputField = ({
  inputType,
  placeholder,
  name,
  value,
  handleChange,
  label,
  options,
  id,
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      {inputType !== "password" && inputType !== "select" && (
        <div className={styles.input__container}>
          {label && <label>{label}</label>}
          <input
            data-testid={id}
            type={inputType}
            name={name}
            className={styles.input_style}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
      {inputType === "password" && (
        <div className={styles.password_input}>
          <input
            data-testid={id}
            type={showPassword ? "text" : "password"}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
          <span onClick={handleTogglePasswordVisibility}>
            {showPassword ? "HIDE" : "SHOW"}
          </span>
        </div>
      )}
      {inputType === "select" && (
        <>
          {label && <label>{label}</label>}
          <select
            data-testid={id}
            className={styles.select}
            value={value}
            onChange={handleChange}
            name={name}
          >
            <option value={value} selected disabled hidden>
              Select
            </option>
            {options?.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              )
            })}
          </select>
        </>
      )}
    </>
  )
}

export default InputField
