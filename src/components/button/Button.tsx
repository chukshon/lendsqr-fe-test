import styles from "./button.module.scss"
import classnames from "classnames"

type Props = {
  buttonType: "default" | "red" | "green" | "grey"
  buttonText: string
  handleClick?: (se: React.SyntheticEvent) => void
}
const Button = ({ buttonText, buttonType }: Props) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.default]: buttonType === "default",
        [styles.red__btn]: buttonType === "red",
        [styles.green__btn]: buttonType === "green",
        [styles.grey__btn]: buttonType === "grey",
      })}
    >
      {buttonText}
    </button>
  )
}

export default Button
