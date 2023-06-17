import {Badge} from "@chakra-ui/react";

interface CriticScoreProps {
	score: number;
}

export default function CriticScore({score}: CriticScoreProps) {
	let color = score >= 75 ? "green" : score >= 60 ? "yellow" : "red";

	return (
		<Badge fontSize="14px" paddingX={2} colorScheme={color}>
			{score}
		</Badge>
	);
}
