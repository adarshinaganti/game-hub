import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCroppedImageURL from "../services/imageURL";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreID?: number;
}

export default function GenreList({
	onSelectGenre,
	selectedGenreID,
}: GenreListProps) {
	const {data, isLoading, error} = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
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
								onClick={() => onSelectGenre(genre)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
}
