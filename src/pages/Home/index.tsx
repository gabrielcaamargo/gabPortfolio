import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import { Container, Main } from './styles';

export default function Home() {
	return (
		<Container>
			<Header />
			<Main>
				<Presentation />
			</Main>
		</Container>
	);
}
