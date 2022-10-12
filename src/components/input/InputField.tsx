import React from "react"
import styles from "./input.module.scss"

type Props = {
  inputType: "email" | "password" | "text"
  placeholder: string
  name: string
  value: string
  handleChange?: (se: React.SyntheticEvent) => void
}

const InputField = ({
  inputType,
  placeholder,
  name,
  value,
  handleChange,
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      {inputType === "email" ? (
        <input
          type="email"
          name={name}
          className={styles.input_style}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <div className={styles.password_input}>
          <input
            type={showPassword ? "text" : "password"}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
          <span onClick={handleTogglePasswordVisibility}>Show</span>
        </div>
      )}
    </>
  )
}

export default InputField
