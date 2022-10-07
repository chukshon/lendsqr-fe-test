import React from "react"
import styles from "./Login.module.scss"
import lendqr_logo from "../../Assets/logo.svg"
import login_image from "../../Assets/login_image.svg"
import InputField from "../../components/input/InputField"
import Button from "../../components/button/Button"

const Login = () => {
  const loginFormInitialState = {
    email: "",
    password: "",
  }
  const [loginFormData, setLoginFormData] = React.useState(
    loginFormInitialState
  )

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(loginFormData)
  }
  const handleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setLoginFormData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.header__logo}>
        <img src={lendqr_logo} alt="lendsqr Logo" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.login__image}>
          <img src={login_image} alt="lendsqr login" />
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__container__header}>
            <h3>Welcome!</h3>
            <p>Enter details to login</p>
          </div>
          <form className={styles.login__form} onSubmit={handleSubmit}>
            <InputField
              inputType="email"
              name="email"
              value={loginFormData.email}
              handleChange={handleChange}
              placeholder="Email"
            />
            <InputField
              inputType="password"
              name="password"
              value={loginFormData.password}
              handleChange={handleChange}
              placeholder="Password"
            />
            <button className={styles.forgot_password_btn}>
              FORGOT PASSWORD?
            </button>
            <Button buttonType="default" buttonText="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
