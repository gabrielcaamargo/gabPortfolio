import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-family: 'Merriweather', serif;
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.colors.blue.main};
`;

export const Description = styled.ul`
  font-size: 28px;
  margin-top: 8px;
  display: flex;
  justify-content: center;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;

    &:not(:last-of-type) {
      margin-right: 8px;
      &::after {
        content: '';
        display: block;
        width: 3px;
        height: 75%;
        background-color: ${({theme}) => theme.colors.blue.main};
      }
    }
  }
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  #scrollArrow {
    margin-top: 8px;
    @keyframes moveArrowDown {
      0% {
        transform: translateY(-12px);
        opacity: 1;
      };

      to {
        transform: translateY(8px);
        opacity: 0;
      }
    }

    animation: 2s ease-in-out infinite moveArrowDown;
  }

`;
