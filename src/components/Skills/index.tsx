import { Container, SkillsContainer, Skill } from './styles';

import { Express, Js, Node, React, Styled, Tailwind, Ts } from '../../assets/icons/techs/techs';

export default function Skills() {
	return (
		<Container>
			<h2>Skills</h2>

			<SkillsContainer>
				<Skill>
					<img src={Js} alt="javascript" />
				</Skill>
				<Skill>
					<img src={Ts} alt="typescript" />
				</Skill>
				<Skill>
					<img src={Node} alt="nodejs" />
				</Skill>
				<Skill>
					<img src={React} alt="reactjs" />
				</Skill>
				<Skill>
					<img src={Express} alt="express" />
				</Skill>
				<Skill>
					<img src={Styled} alt="styled components" />
				</Skill>
				<Skill>
					<img src={Tailwind} alt="tailwindcss" />
				</Skill>
				<Skill>
					<p>And a lot more...</p>
				</Skill>
			</SkillsContainer>
		</Container>
	);
}

//Skills: React, Javascript, Typescript, Styled Components, Tailwind, , Express, Node, +more
