import styled from 'styled-components';

export const Title = styled.h1`
line-height: 26px;
font-size: 42px;

  span {
    color: ${({theme}) => theme.colors.blue.main};
    display: block;
    font-family: "Merriweather", serif;
    font-style: italic;
    margin-left: 16px;
  }
`;
