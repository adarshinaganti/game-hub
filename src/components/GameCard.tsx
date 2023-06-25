import {Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/imageURL";
import Emoji from "./Emoji";
import {Link} from "react-router-dom";

interface GameCardProps {
	game: Game;
}

const GameCard = ({game}: GameCardProps) => {
	return (
		<Card
			_hover={{
				transform: "scale(1.03)",
			}}
		>
			<Link to={"/games/" + game.slug}>
				<Image src={getCroppedImageURL(game.background_image)} />
			</Link>
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					<Link to={"/games/" + game.slug}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
