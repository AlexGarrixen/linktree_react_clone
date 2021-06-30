import styled from 'styled-components';
import { SwitchProps } from './';

export const SwitchRoot = styled.div<
  Pick<SwitchProps, 'isEnabled' | 'colorScheme'>
>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  height: 20px;
  width: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  position: relative;
  cursor: pointer;

  ${({ isEnabled, colorScheme, theme }) =>
    isEnabled &&
    colorScheme === 'primary' &&
    `
  background-color: ${theme.colors.primary};
  `}

  ${({ isEnabled, colorScheme, theme }) =>
    isEnabled &&
    colorScheme === 'success' &&
    `
  background-color: ${theme.colors.success};
  `}
  
  ${({ isEnabled }) =>
    isEnabled &&
    `
    & > span {
      transform: translateY(-50%) translateX(calc(2px));
    }
  `}
`;

export const Indicator = styled.span`
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(calc(100% - 2px));
  border-radius: 50%;
  transition-property: transform;
  transition-duration: 250ms;
`;
