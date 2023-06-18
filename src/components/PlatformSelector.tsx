import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import {Platform} from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

export default function PlatformSelector({
	onSelectPlatform,
	selectedPlatform,
}: PlatformSelectorProps) {
	const {data, error} = usePlatforms();

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.data.map((platform: Platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
