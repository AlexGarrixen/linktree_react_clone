import React from 'react';
import { DefaultTheme } from 'styled-components';
import { TypographyRoot } from './styled';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TypographyProps<P = {}> = {
  children?: React.ReactNode;
  as?: React.ElementType;
  colorScheme?: 'primary' | 'secondary' | 'danger';
  className?: string;
  color?: string;
  size?:
    | keyof DefaultTheme['fontSizes']
    | Partial<
        Record<keyof DefaultTheme['screens'], keyof DefaultTheme['fontSizes']>
      >;
} & P;

const TypographyBase = ({
  as,
  colorScheme,
  color,
  size,
  children,
}: TypographyProps) => (
  <TypographyRoot as={as} size={size} color={color} colorScheme={colorScheme}>
    {children}
  </TypographyRoot>
);

export default TypographyBase;
