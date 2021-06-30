import styled from 'styled-components';
import ButtonBase, { ButtonBaseProps } from '@components/Form/ButtonBase';

export const IconButtonRoot = styled<
  (props: ButtonBaseProps<{ size?: 'sm' | 'md' | 'lg' }>) => JSX.Element
>(ButtonBase)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ size }) =>
    size === 'sm' &&
    `
      width: 30px;
      height: 30px;
    `}

  ${({ size }) =>
    size === 'md' &&
    `
      width: 40px;
      height: 40px;
    `}
    
  ${({ size }) =>
    size === 'lg' &&
    `
      width: 48px;
      height: 48px;
    `}
`;
