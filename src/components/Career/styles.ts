import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 48px;
  margin-bottom: 72px;

  h2 {
    font-size: 48px;
    font-family: "Rubik", sans-serif;
    margin-bottom: 24px;
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  strong {
    font-size: 26px;
    line-height: 24px;
  }

  span {
    font-size: 18px;
  }


  & + & {
    margin-top: 22px;
  }
`;
