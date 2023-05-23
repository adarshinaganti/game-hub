import {useEffect, useState} from "react";
import APIClient from "../services/APIClient";
import {Text} from "@chakra-ui/react";

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

interface Game {
	id: number;
	name: string;
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		APIClient.get<FetchGamesResponse>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message));
	});

	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
