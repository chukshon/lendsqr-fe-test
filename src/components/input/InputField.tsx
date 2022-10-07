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
        <input type="email" className={styles.input} />
      ) : (
        <input type="password" />
      )}
    </>
  )
}

export default InputField
