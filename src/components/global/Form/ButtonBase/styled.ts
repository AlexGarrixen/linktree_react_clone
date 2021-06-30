import styled from 'styled-components';
import _get from 'lodash.get';
import { ButtonBaseProps } from './';

export const ButtonBaseRoot = styled.button<ButtonBaseProps>`
  border: none;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'primary' &&
    variant === 'filled' &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'primary' &&
    variant === 'outlined' &&
    `
    background-color: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.primary} inset;
    color: ${theme.colors.primary};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'secondary' &&
    variant === 'filled' &&
    `
    background-color: ${theme.colors.gray[500]};
    color: ${theme.colors.white};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'secondary' &&
    variant === 'outlined' &&
    `
    background-color: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.gray[500]} inset;
    color: ${theme.colors.gray[500]};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'base' &&
    variant === 'filled' &&
    `
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[400]};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'base' &&
    variant === 'outlined' &&
    `
    background-color: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.gray[100]} inset;
    color: ${theme.colors.gray[400]};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'white' &&
    variant === 'filled' &&
    `
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[400]};
  `}

  ${({ colorScheme, variant, theme }) =>
    colorScheme === 'white' &&
    variant === 'outlined' &&
    `
    background-color: transparent;
    box-shadow: 0 0 0 1px ${theme.colors.white} inset;
    color: ${theme.colors.white};
  `}

  ${({ bgColor, theme }) =>
    bgColor &&
    `
    background-color: ${_get(theme.colors, bgColor) || bgColor};
  `}

  ${({ color, theme }) =>
    color &&
    `
    color: ${_get(theme.colors, color) || color};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
