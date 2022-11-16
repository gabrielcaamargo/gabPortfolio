import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.background};
  button {
    background: none;
    border: none;
    outline: none;

    img {
      user-select: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;
