import CartButton from '../cart/cartButton/cartButton.component'
import styles from './header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>ReactMeals</h1>
            <CartButton />
		</header>
	)
}

export default Header
