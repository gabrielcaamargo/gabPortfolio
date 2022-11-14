import styled from 'styled-components';

export const LinksContainer = styled.ul`
  display: flex;
  gap: 12px;

  li {
    list-style: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;

    &:not(:last-of-type) {
      &::after {
        width: 2px;
        content: '';
        height: 150%;
        background-color: #CCC;
        display: block;
      }
    }

    &.language {
      color: ${({theme}) => theme.colors.blue.main};
      font-style: italic;
      font-weight: 700;
    }
  }
`;
