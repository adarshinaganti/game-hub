import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";

interface GameHeadingProps {
	gameQuery: GameQuery;
}

export default function GameHeading({gameQuery}: GameHeadingProps) {
	const genre = useGenreLookup(gameQuery.genreID);
	const platform = usePlatformLookup(gameQuery.platformID);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
}
