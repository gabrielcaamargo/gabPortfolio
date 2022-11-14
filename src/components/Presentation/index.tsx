import { Container, Description, Scroll, Title } from './styles';

import { BsMouse, BsArrowDown } from 'react-icons/bs';

export default function Presentation() {
	return (
		<Container>
			<Title>Gabriel Camargo</Title>
			<Description>
				<li>Frontend Developer</li>
				<li>UI Designer</li>
			</Description>

			<Scroll>
				<BsMouse size={32}/>
				<BsArrowDown size={24} id="scrollArrow" />
			</Scroll>

		</Container>
	);
}
