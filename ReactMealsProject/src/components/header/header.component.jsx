import Modal from "../UI/Modal/modal.component"
import Cart from "../cart/cart/cart.component"
import CartButton from "../cart/cartButton/cartButton.component"
import styles from "./header.module.css"

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<CartButton />
				<Modal>
					<Cart />
				</Modal>
			</header>
			<div className={styles.background__image}></div>
		</>
	)
}

export default Header
