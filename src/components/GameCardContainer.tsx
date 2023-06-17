import {Box} from "@chakra-ui/react";

interface GameCardContainerProps {
	children: React.ReactNode;
}

export default function GameCardContainer({children}: GameCardContainerProps) {
	return (
		<Box borderRadius={10} overflow="hidden">
			{children}
		</Box>
	);
}
