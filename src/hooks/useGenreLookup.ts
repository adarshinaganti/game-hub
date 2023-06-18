import useGenres from "./useGenres";

export default function useGenreLookup(id?: number) {
	const {data: genres} = useGenres();
	return genres?.results.find((g) => g.id === id);
}
