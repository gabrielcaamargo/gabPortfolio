import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 124px;
  padding: 16px 48px;
  h2 {
    font-size: 48px;
    font-family: "Rubik", sans-serif;
    margin-bottom: 24px;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 768px) {
    gap: 12px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Skill = styled.div`
  padding: 24px;
  height: 192px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transition: all 0.2s ease-in;

  img {
    width: 112px
  }

  p {
    font-size: 18px;
  }

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.blue.main};
  }
`;
