import styles from "./button.module.scss"
import classnames from "classnames"

type Props = {
  buttonType: "default" | "red" | "green" | "grey"
  buttonText: string
  handleClick?: (se: React.SyntheticEvent) => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  id?: string
}
const Button = ({ buttonText, buttonType, type, disabled, id }: Props) => {
  return (
    <div className={styles.button__container}>
      <button
        data-testid={id}
        disabled={disabled}
        type={type ? type : "button"}
        className={classnames(styles.button, {
          [styles.default]: buttonType === "default",
          [styles.red__btn]: buttonType === "red",
          [styles.green__btn]: buttonType === "green",
          [styles.grey__btn]: buttonType === "grey",
        })}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Button
