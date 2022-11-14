import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-size: 48px;
  font-family: "Merriweather", serif;
  font-style: italic;
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.colors.blue.main};
`;
