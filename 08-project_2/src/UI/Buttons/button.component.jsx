import styles from "./button.module.css"

const Button = ({ children, ...otherProps }) => (
    <button className={styles.mainButton} {...otherProps}>
        {children}
    </button>
)

export default Button