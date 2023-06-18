import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "56e94a6ec4c34f809963f4fa7972f4fe",
	},
});

export interface FetchResponse<T> {
	count: number;
	next?: string | null;
	results: T[];
}
