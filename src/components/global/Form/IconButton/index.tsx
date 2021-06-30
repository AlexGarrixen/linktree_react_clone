import React from 'react';
import { ButtonBaseProps } from '@components/Form/ButtonBase';
import { IconButtonRoot } from './styled';

export type IconButtonProps = {
  as?: React.ElementType | string;
  size?: 'sm' | 'md' | 'lg';
} & ButtonBaseProps;

const IconButton = ({
  size = 'md',
  children,
  colorScheme = 'base',
  ...rest
}: IconButtonProps) => (
  <IconButtonRoot {...rest} size={size} colorScheme={colorScheme}>
    {children}
  </IconButtonRoot>
);

export default IconButton;
