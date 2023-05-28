import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search, {SearchProps} from "./Search";

const NavBar = ({onSearch}: SearchProps) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<Search onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
