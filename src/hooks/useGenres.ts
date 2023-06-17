import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import {FetchResponse} from "./useData";
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export default function useGenres() {
	useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			APIClient.get<FetchResponse<Genre>>("/genres").then(
				(res) => res.data
			),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: {count: genres.length, results: genres},
	});
}
