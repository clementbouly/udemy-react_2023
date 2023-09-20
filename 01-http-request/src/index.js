import React from "react"
import ReactDOM from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
export const queryClient = new QueryClient()
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)
