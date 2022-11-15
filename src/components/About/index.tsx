import { Container, Experience, Title } from './styles';

export default function About() {
	return (
		<Container>
			<Title>
        Building unforgettable <span>memories</span> & digital <span>innovation</span>.
			</Title>

			<Experience>
				<div>
					<p>2+</p>
					<small>Years of experience</small>
				</div>
				<div>
					<p>100%</p>
					<small>Satisfaction</small>
				</div>
				<div>
					<p>3500</p>
					<small>Code lines written</small>
				</div>
			</Experience>
		</Container>
	);
}
