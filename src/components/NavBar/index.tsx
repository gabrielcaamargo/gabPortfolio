import { LinksContainer } from './styles';

export default function NavBar() {
	return (
		<LinksContainer>
			<li>ABOUT.</li>
			<li>PROJECTS.</li>
			<li>SKILLS.</li>
			<li className='language'>EN.</li>
		</LinksContainer>
	);
}
