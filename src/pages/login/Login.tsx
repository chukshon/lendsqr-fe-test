import React from "react"
import styles from "./Login.module.scss"
import lendqr_logo from "../../Assets/logo.svg"
import login_image from "../../Assets/login_image.svg"
import InputField from "../../components/input/InputField"

const Login = () => {
  const loginFormInitialState = {
    email: "",
    password: "",
  }
  const [loginFormData, setLoginFormData] = React.useState(
    loginFormInitialState
  )
  const handleChange = (e: any) => {
    const name = e.target.value
    const value = e.target.value
    setLoginFormData({ ...loginFormData, [name]: value })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header__logo}>
        <img src={lendqr_logo} alt="lendsqr Logo" />
      </div>
      <div className={styles.login__image}>
        <img src={login_image} alt="lendsqr login" />
      </div>
      <div className={styles.login__container}>
        <div className={styles.login__container__header}>
          <h3>Welcome!</h3>
          <p>Enter details to login</p>
        </div>
        <form className={styles.login__form}>
          <InputField
            inputType="email"
            name="password"
            value={loginFormInitialState.password}
            handleChange={handleChange}
            placeholder="Password"
          />
          <InputField
            inputType="password"
            name="email"
            value={loginFormInitialState.email}
            handleChange={handleChange}
            placeholder="Email"
          />
          <p>Forgot Password</p>
          <button>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
