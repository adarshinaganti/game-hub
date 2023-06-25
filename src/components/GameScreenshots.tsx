import {Image, SimpleGrid} from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotProps {
	gameID: number;
}

const GameScreenshots = ({gameID}: GameScreenshotProps) => {
	const {data, error, isLoading} = useScreenshots(gameID);
	if (isLoading) return null;
	if (error) throw error;

	return (
		<SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
			{data?.results.map((file) => (
				<Image key={file.id} src={file.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
