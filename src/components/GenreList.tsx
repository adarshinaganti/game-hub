import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/imageURL";
import useGameQueryStore from "../store";

const GenreList = () => {
	const {data, isLoading, error} = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
	const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreID);
	const setSelectedGenreID = useGameQueryStore((s) => s.setGenreID);

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageURL(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={
									genre.id === selectedGenreID
										? "bold"
										: "normal"
								}
								fontSize="lg"
								variant="link"
								onClick={() => setSelectedGenreID(genre.id)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
