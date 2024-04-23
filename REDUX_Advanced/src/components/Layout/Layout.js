import { Fragment } from "react"
import { useSelector } from "react-redux"
import Notification from "../UI/Notification"
import MainHeader from "./MainHeader"

const Layout = (props) => {
	const { notification } = useSelector((state) => state.cart)
	return (
		<Fragment>
			{notification && (
				<Notification title={notification.title} message={notification.message} status={notification.status} />
			)}
			<MainHeader />
			<main>{props.children}</main>
		</Fragment>
	)
}

export default Layout
