import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { loadProducts } from "../../store/product-actions"
import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const Products = (props) => {
	const [products, setProducts] = useState([])
	const dispatch = useDispatch()

	const fetchProducts = async () => {
		const products = await dispatch(loadProducts())
		if (products) {
			setProducts(products)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [dispatch])

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{products.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	)
}

export default Products
