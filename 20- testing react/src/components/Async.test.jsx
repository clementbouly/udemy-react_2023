import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async", () => {
	test("It should render 5 posts", async () => {
		// Mock fetch globally
		global.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				json: () =>
					Promise.resolve([
						{ id: 1, title: "Post 1" },
						{ id: 2, title: "Post 2" },
						{ id: 3, title: "Post 3" },
						{ id: 4, title: "Post 4" },
						{ id: 5, title: "Post 5" },
						{ id: 6, title: "Post 6" },
					]),
			})
		)
		render(<Async />)

		const listItems = await screen.findAllByRole("listitem")

		expect(listItems).toHaveLength(5)
	})
})
