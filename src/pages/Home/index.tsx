import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Career from '../../components/Career';
import EffectPhrase from '../../components/EffectPhrase';
import { Container, Main } from './styles';
import Skills from '../../components/Skills';

export default function Home() {
	return (
		<Container>
			<Header />
			<Main>
				<Presentation />
				<About />
				<EffectPhrase />
				<Career />
				<Skills />
			</Main>
		</Container>
	);
}
