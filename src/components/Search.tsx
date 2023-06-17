import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {useRef} from "react";
import {BsSearch} from "react-icons/bs";

export interface SearchProps {
	onSearch: (searchText: string) => void;
}

export default function Search({onSearch}: SearchProps) {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search"
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
}
