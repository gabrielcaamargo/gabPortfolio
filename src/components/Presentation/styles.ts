import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  margin-top: 4%;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-family: 'Rubik', serif;
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.colors.blue.main};

  @media screen and (max-width: 768px) {
    font-size: 56px;
  }
`;

export const Description = styled.div`
  font-size: 28px;
  margin-top: 8px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
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
        transform: translateY(-8px);
        opacity: 1;
      };

      50% {
        transform: translateY(6px);
      }

      75% {
        transform: translateY(2px);
        opacity: 1;
      }

      100% {
        transform: translateY(12px);
        opacity: 0;
      }
    }

    animation: 4s ease-in-out infinite moveArrowDown;
  }

`;
