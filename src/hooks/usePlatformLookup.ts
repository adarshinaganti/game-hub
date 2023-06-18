import usePlatforms from "./usePlatforms";

export default function usePlatformLookup(id?: number) {
	const {data: platforms} = usePlatforms();
	return platforms?.results.find((p) => p.id === id);
}
