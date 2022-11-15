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
