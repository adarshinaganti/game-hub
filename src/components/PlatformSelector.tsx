import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatformLookup from "../hooks/usePlatformLookup";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const {data, error} = usePlatforms();
	const setSelectedPlatformID = useGameQueryStore((s) => s.setPlatformID);
	const selectedPlatformID = useGameQueryStore((s) => s.gameQuery.platformID);
	const selectedPlatform = usePlatformLookup(selectedPlatformID);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						onClick={() => setSelectedPlatformID(platform.id)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
