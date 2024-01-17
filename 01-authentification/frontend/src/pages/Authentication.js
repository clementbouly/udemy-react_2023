import { json, redirect } from "react-router-dom"
import AuthForm from "../components/AuthForm"

function AuthenticationPage() {
	return <AuthForm />
}

export default AuthenticationPage

export async function authenticationAction({ request, params }) {
	const searchParams = new URL(request.url).searchParams
	const isLogin = searchParams.get("mode") === "login"

	const data = await request.formData()
	const formData = Object.fromEntries(data)

	const response = await fetch(`http://localhost:8080/${isLogin ? "login" : "signup"}`, {
		method: "POST",
		body: JSON.stringify(formData),
		headers: {
			"Content-Type": "application/json",
		},
	})

	if (!response.ok) {
		const { message, errors } = await response.json()
		return json({ message, errors }, { status: response.status })
	}

	const { token } = await response.json()
	if (token) {
		localStorage.setItem("token", token)
	}

	return redirect("/")
}
