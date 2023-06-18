import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/APIClient";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: () => APIClient.get("/platforms/lists/parents"),
	});
}
