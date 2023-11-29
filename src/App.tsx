import "./App.css";

// grab convex query funcs
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
	const tshirts = useQuery(api.tshirts.get);

	return (
		<div className="tshirts-grid">
			{tshirts && tshirts.length > 0 ? (
				tshirts.map(({ _id, name, image }) => (
					<div
						key={_id}
						className="tshirt"
					>
						<h1>{name}</h1>
						<img
							src={image}
							alt=""
						/>
					</div>
				))
			) : (
				<div>No T-shirts in the DB!</div>
			)}
		</div>
	);
}

export default App;
