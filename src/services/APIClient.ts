import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
	count: number;
	next?: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "56e94a6ec4c34f809963f4fa7972f4fe",
	},
});

export default class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}
