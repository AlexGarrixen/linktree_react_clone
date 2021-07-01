import styled, { DefaultTheme } from 'styled-components';
import { TabsProps } from './';

const colorSchemeActive = (theme: DefaultTheme) => ({
  primary: `
  color: ${theme.colors.primary};
  box-shadow: 0 -2px 0 0 ${theme.colors.primary} inset;
  &:hover {
    box-shadow: 0 -2px 0 0 ${theme.colors.primary} inset;
  }
  `,
  secondary: `
    color: ${theme.colors.gray[400]};
    box-shadow: 0 -2px 0 0 ${theme.colors.gray[400]} inset;
    &:hover {
      box-shadow: 0 -2px 0 0 ${theme.colors.gray[400]} inset;
    }
  `,
});

export const TabsRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabRoot = styled.li<
  Pick<TabsProps, 'size' | 'colorScheme'> & { isActive?: boolean }
>`
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.fontSizes.base.size};
  flex-shrink: 0;
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition-property: box-shadow;
  transition-duration: 250ms;

  &:hover {
    box-shadow: 0 -2px 0 0 ${({ theme }) => theme.colors.gray[200]} inset;
  }

  ${({ size }) =>
    size === 'sm' &&
    `
    padding-top: 6px;
    padding-bottom: 6px;
  `}

  ${({ size }) =>
    size === 'lg' &&
    `
    padding-top: 20px;
    padding-bottom: 20px;
  `}

  ${({ isActive, colorScheme, theme }) =>
    isActive && colorSchemeActive(theme)[colorScheme]};
`;

export const TabsBox = styled.ul`
  display: inherit;
  overflow-x: auto;
`;
