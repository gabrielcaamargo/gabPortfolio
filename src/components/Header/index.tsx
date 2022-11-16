import Logo from '../Logo';
import { Container } from './styles';

import Menu from '../../assets/icons/menu-icon.png';

export default function Header() {
	return (
		<Container>
			<Logo />
			<button>
				<img src={Menu} alt="" />
			</button>
		</Container>
	);
}
