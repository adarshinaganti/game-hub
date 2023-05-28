import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" />
			<Search />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
