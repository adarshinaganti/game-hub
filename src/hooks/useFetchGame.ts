import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import {Game} from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useFetchGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
	});

export default useFetchGame;
