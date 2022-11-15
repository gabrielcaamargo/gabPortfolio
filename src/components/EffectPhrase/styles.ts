import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 48px;
  margin: 256px auto;
  width: max-content;

  p {
    font-size: 32px;
    letter-spacing: -1px;
    font-weight: 500;
    text-transform: uppercase;
    span {
      color: ${({theme}) => theme.colors.blue.main};
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 356px auto;

    p {
      font-size: 26px;
    }
  }
`;
