import { useNavigate } from "react-router-dom"

export const Home = () => {
	const navigate = useNavigate()

	const randomPostId = Math.floor(Math.random() * 100) + 1

	return (
		<div>
			<h1>Home</h1>
			<button
				onClick={() => {
					navigate(`/post/${randomPostId}`)
				}}
			>
				Random Post
			</button>
		</div>
	)
}
