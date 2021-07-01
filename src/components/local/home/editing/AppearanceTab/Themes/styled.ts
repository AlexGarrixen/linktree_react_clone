import styled from 'styled-components';

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
`;

export const ThemesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  text-align: center;

  li {
    cursor: pointer;
  }
`;

export const ThemeMediabox = styled.div<{ src?: string; isActive?: boolean }>`
  padding-top: 150%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.gray[200]};
  background-size: cover;
  background-position: center;
  margin-bottom: 4px;
  transition-property: box-shadow;
  transition-duration: 250ms;

  ${({ src }) =>
    src &&
    `
    background-image: url(${src});
  `}

  ${({ isActive, theme }) =>
    isActive &&
    `
    box-shadow: 0 0 0 4px ${theme.colors.primary};  
  `}
`;
