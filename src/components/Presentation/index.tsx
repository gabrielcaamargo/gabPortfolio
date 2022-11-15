import { Container, Description, Scroll, Title } from './styles';

import { BsMouse, BsArrowDown } from 'react-icons/bs';

export default function Presentation() {
	return (
		<Container>
			<Title>Gabriel Camargo</Title>
			<Description>
				<p>Frontend Developer</p>
			</Description>

			{/* <Scroll>
				<BsMouse size={32}/>
				<BsArrowDown size={24} id="scrollArrow" />
			</Scroll> */}

		</Container>
	);
}
