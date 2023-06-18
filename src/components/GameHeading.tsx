import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
	gameQuery: GameQuery;
}

export default function GameHeading({gameQuery}: GameHeadingProps) {
	const {data: genres} = useGenres();
	const genre = genres?.results.find((g) => g.id === gameQuery.genreID);
	const {data: platforms} = usePlatforms();
	const platform = platforms?.results.find(
		(p) => p.id === gameQuery.platformID
	);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
}
