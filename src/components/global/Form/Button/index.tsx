import React from 'react';
import { ButtonBaseProps } from '@components/Form/ButtonBase';
import { ButtonRoot, Label } from './styled';

export type ButtonProps = {
  size?: 'sm' | 'md';
  fullWidth?: boolean;
} & ButtonBaseProps;

const Button = ({
  colorScheme = 'base',
  size = 'md',
  children,
  fullWidth,
  ...rest
}: ButtonProps) => (
  <ButtonRoot
    {...rest}
    size={size}
    fullWidth={fullWidth}
    colorScheme={colorScheme}
  >
    <Label>{children}</Label>
  </ButtonRoot>
);

export default Button;
