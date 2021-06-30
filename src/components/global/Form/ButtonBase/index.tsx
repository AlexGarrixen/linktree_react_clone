import React from 'react';
import { ButtonBaseRoot } from './styled';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ButtonBaseProps<P = {}> = {
  as?: React.ElementType | string;
  colorScheme?: 'primary' | 'secondary' | 'base' | 'white';
  color?: string;
  bgColor?: string;
  variant?: 'filled' | 'outlined';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & P;

const ButtonBase = ({
  as,
  colorScheme,
  color,
  bgColor,
  variant = 'filled',
  children,
  ...rest
}: ButtonBaseProps) => (
  <ButtonBaseRoot
    {...rest}
    as={as}
    colorScheme={colorScheme}
    color={color}
    bgColor={bgColor}
    variant={variant}
  >
    {children}
  </ButtonBaseRoot>
);

export default ButtonBase;
