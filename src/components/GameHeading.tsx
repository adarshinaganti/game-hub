import {Heading} from "@chakra-ui/react";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
	const genre = useGenreLookup(genreID);

	const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
	const platform = usePlatformLookup(platformID);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
	return (
		<Heading as="h1" marginY={5} fontSize="5xl">
			{heading}
		</Heading>
	);
};

export default GameHeading;
