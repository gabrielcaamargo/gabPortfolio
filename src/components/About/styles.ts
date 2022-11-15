import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8%;

  @keyframes textAppear {
    from {
      transform: translateX(-48px);
      opacity: 0;
    }

    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  animation: ease-in-out 1 2s textAppear;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  letter-spacing: -1px;
  font-weight: 500;

  span {
    color: ${({theme}) => theme.colors.blue.main};
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`;

export const Experience = styled.div`
  width: 100%;
  margin-top: 48px;
  background: rgba(255, 255, 255, 0.05);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 64px 0px;
  margin-bottom: 48px;

  div {
    text-align: center;

    p {
      font-size: 48px;
    }

    small {
      font-size: 22px
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 36px;
  }
`;
