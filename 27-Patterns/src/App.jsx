import savannaImg from "./assets/african-savanna.jpg"
import amazonImg from "./assets/amazon-river.jpg"
import caribbeanImg from "./assets/caribbean-beach.jpg"
import desertImg from "./assets/desert-dunes.jpg"
import forestImg from "./assets/forest-waterfall.jpg"
import Accordion from "./components/Accordion"
import SearchableList from "./components/SearchableList/SearchableList"

function App() {
	const items = [
		{
			title: "Accordion 1",
			content: "Content 1",
		},
		{
			title: "Accordion 1",
			content: "Content 2",
		},
		{
			title: "Accordion 3",
			content: "Content 3",
		},
		{
			title: "Accordion 4",
			content: "Content 4",
		},
	]

	const PLACES = [
		{
			id: "african-savanna",
			image: savannaImg,
			title: "African Savanna",
			description: "Experience the beauty of nature.",
		},
		{
			id: "amazon-river",
			image: amazonImg,
			title: "Amazon River",
			description: "Get to know the largest river in the world.",
		},
		{
			id: "caribbean-beach",
			image: caribbeanImg,
			title: "Caribbean Beach",
			description: "Enjoy the sun and the beach.",
		},
		{
			id: "desert-dunes",
			image: desertImg,
			title: "Desert Dunes",
			description: "Discover the desert life.",
		},
		{
			id: "forest-waterfall",
			image: forestImg,
			title: "Forest Waterfall",
			description: "Listen to the sound of the water.",
		},
	]

	const Item = ({ item }) => {
		return <h2>{item.title}</h2>
	}

	function Place({ item }) {
		return (
			<article className="place">
				<img src={item.image} alt={item.title} />
				<div>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>
			</article>
		)
	}

	return (
		<main>
			<h1>React Patterns & Practices</h1>
			<section>
				<SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
					{(item) => <Place item={item} />}
				</SearchableList>
			</section>
			<SearchableList items={items} itemKeyFn={(item) => Math.random()}>
				{(item) => <Item item={item} />}
			</SearchableList>
			<Accordion className="accordion">
				{items.map((item, index) => (
					<Accordion.Item key={index} title={item.title} className="accordion-item" index={index}>
						{item.content}
					</Accordion.Item>
				))}
			</Accordion>
		</main>
	)
}

export default App
