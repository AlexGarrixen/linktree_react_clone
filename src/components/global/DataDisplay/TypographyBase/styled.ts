import styled, { DefaultTheme } from 'styled-components';
import _get from 'lodash.get';
import { TypographyProps } from '.';

const setSize = (
  size: keyof DefaultTheme['fontSizes'],
  theme: DefaultTheme
) => {
  const fontSizes = theme.fontSizes;
  const fontSize = fontSizes[size];

  if (fontSize)
    return `
   font-size: ${fontSize.size};
   line-height: ${fontSize.lineHeight};
  `;

  return '';
};

const setBreakpointsSize = (
  breakpoints: Partial<
    Record<keyof DefaultTheme['screens'], keyof DefaultTheme['fontSizes']>
  >,
  theme: DefaultTheme
) => {
  const { screens } = theme;
  const fontSizes = theme.fontSizes;
  const rules: string[] = [];

  for (const breakpoint of Object.keys(breakpoints)) {
    const screen = screens[breakpoint];
    const fontSize = fontSizes[breakpoints[breakpoint]];

    if (screen && fontSize) {
      rules.push(`
       @media screen and (min-width: ${screen}) {
         font-size: ${fontSize.size};
         line-height: ${fontSize.lineHeight};
       }
      `);
    }
  }

  return rules.join(' ');
};

const setColorScheme = (
  colorScheme: TypographyProps['colorScheme'],
  theme: DefaultTheme
) => {
  const { colors } = theme;
  const colorsMap = {
    primary: colors.primary,
    secondary: colors.gray[400],
    danger: colors.danger,
  };
  const color = colorsMap[colorScheme];

  if (color)
    return `
    color: ${color};
  `;

  return '';
};

export const TypographyRoot = styled.p<TypographyProps>`
  ${({ size, theme }) =>
    size !== undefined
      ? typeof size === 'string'
        ? setSize(size, theme)
        : setBreakpointsSize(size, theme)
      : ''}

  ${({ colorScheme, theme }) =>
    colorScheme && setColorScheme(colorScheme, theme)}

  ${({ color, theme }) =>
    color &&
    `
    color: ${_get(theme.colors, color) || color};
  `}
`;
