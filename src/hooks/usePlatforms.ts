import {useQuery} from "@tanstack/react-query";
import APIClient, {FetchResponse} from "../services/APIClient";
import {Platform} from "./useGames";

export default function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			APIClient.get<FetchResponse<Platform>>(
				"/platforms/lists/parents"
			).then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24h
	});
}
